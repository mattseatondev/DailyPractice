
def is_triangle(a, b, c):
    return (s := __builtins__.sorted(list(locals().values())))[0] + s[1] > s[2]


print(is_triangle(1, 2, 2))
print(is_triangle(7, 2, 2))