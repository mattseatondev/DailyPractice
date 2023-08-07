
def unique_in_order(iterable):
    return [y for x, y in enumerate(iterable) if y is not iterable[x - 1] or x == 0]

print(unique_in_order('AAAABBBCCDAABBB'))