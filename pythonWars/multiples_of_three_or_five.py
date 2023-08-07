
def multiples(number):
    return sum(x for x in range(0, number) if x % 3 == 0 or x % 5 == 0)

print(multiples(100))