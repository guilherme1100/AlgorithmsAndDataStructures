# https://codeforces.com/contest/1311/problem/A

for _ in range(int(input())):
    a,b = map(int,input().split())
    if b>a:
        print((2-(b-a)%2))
    elif b<a:
        print((1+(a-b)%2))
    else:
        print(0)
