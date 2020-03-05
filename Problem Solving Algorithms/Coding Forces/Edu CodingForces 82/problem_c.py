# https://codeforces.com/contest/1303/problem/C

def get_adjecent_chars(password, find_char):
    adjecent_index = [(i-1,i+1) for i in range(len(password)) if find_char == password[i]]
    final = set()

    for i,j in adjecent_index:
        if 0 <= i < len(password):
            final.add(password[i])
        if 0 <= j < len(password):
            final.add(password[j])

    return [i for i in final]

def create_chars_dict(s):
    s_list = set([char for char in s])
    impossible = False
    s_dict = {}

    extreme_counter = 0
    extremes = []
    for i in s_list:
        chars = get_adjecent_chars(s, i)
        if len(chars) > 2:
            impossible = True
            break
        if len(chars) == 1:
            extreme_counter += 1
            extremes.append(i)
        s_dict[i] = chars

    if extreme_counter != 2 and len(s) > 1:
        impossible = True


    return (s_dict, extremes, impossible)


def optimize_key_order(s_dict, extremes):
    current_string = extremes[0] + s_dict[extremes[0]][0]
    b_previous = current_string[-2]
    previous = current_string[-1]

    while previous != extremes[1]:
        i,j = s_dict[previous]

        current_string += i if i != b_previous else j
        b_previous = current_string[-2]
        previous = current_string[-1]

    return current_string


def build_keyboard(default_keyboard, important_sequence):

    for i in important_sequence:
        default_keyboard = default_keyboard.replace(i, '')

    return important_sequence + default_keyboard


for i in range(int(input())):

    s = input()

    default_keyboard = "abcdefghijklmnopqrstuvwxyz"

    s_dict, extremes, impossible = create_chars_dict(s)

    # Test will be impossible if there is a single character
    # with more than 2 connections or if there is not exaclty
    # 2 single characters with exaclty 1 connection as start
    # and ending points. (Exception for s with len smaller than 2
    # since in this case the start is the end).

    if impossible:
        print('NO')
        continue

    if len(s) == 1:
        print('YES')
        print(build_keyboard(default_keyboard, s))
        continue

    current_string = optimize_key_order(s_dict, extremes)

    print('YES')
    print(build_keyboard(default_keyboard, current_string))
