# https://codeforces.com/contest/1303/problem/B

import math

for i in range(int(input())):

    n, good_d, bad_d = map(int, input().split())
    min_high_q = math.ceil(n/2)

    if good_d >= bad_d or good_d >= n or good_d >= min_high_q:
        print(n)
        continue

    print((math.ceil(min_high_q / good_d - 1) * bad_d) + min_high_q)
