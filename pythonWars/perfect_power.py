
def isPP(n):

    arr = []
    for i in range(n):
        for x in range(n):
            if (x ** i) == n: arr = [i, x]
            break
    return arr

for i in [4, 9, 81, 5]:
    print(isPP(i))