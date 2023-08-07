
def persistence(n):
    times = 0
    num = n
    while (len(str(num)) > 1):
        times += 1
        curr = 1
        spl = [(curr := curr * int(dig)) for dig in str(num)]
        num = spl[len(spl) - 1]
    else:
        return times

if __name__ == '__main__': print(persistence(39))