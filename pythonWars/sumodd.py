
def sumodd(n):
    nrange = [ i for i in range(1, n + 1) ]
    fin = 1
    for x in nrange:
        fin += 2 * (x - 1)
    frange = list(range(fin, fin + ((n * 2)), 2))
    return sum(frange)


print(sumodd(5))