
def expanded_form(num):
    return ' + '.join([str((int(y) * 10**list(range(len(str(num))))[::-1][x])) for x, y in enumerate(str(num)) if y != '0'])

print(expanded_form(12))
print(expanded_form(70304))
print(expanded_form(3174))