# https://codeforces.com/contest/1303/problem/A
s = []
for i in range(int(input())):
    s.append(input())

def improve_pattern(pattern):
    zeros_removed = 0

    pattern = pattern[pattern.find('1') : pattern.rfind('1') + 1]

    while True:

        zero_find = pattern.find('0')

        if zero_find != -1:
            pattern = pattern[:zero_find] + pattern[zero_find + 1:]
            zeros_removed += 1
        else:
            break

    return zeros_removed

for pattern in s:
    print(improve_pattern(pattern))
