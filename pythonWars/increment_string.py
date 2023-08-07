
def increment_string(strng):
    num_list = ''.join(i for i in strng if i.isnumeric())
    if not len(num_list): return strng + '1'
    zeroes = ''
    for x, y in enumerate(num_list):
        if int(y) != 0:
            break;
        if x >= len(num_list) - 1:
            break;
        else: zeroes += '0' if num_list[x + 1 if len(num_list) >= x + 1 else 0] != '9' else ''
    return ''.join(i for i in strng if not i.isnumeric()) + zeroes + str(int(num_list) + 1)

print(increment_string('foo'))
print(increment_string('foobar099'))
print(increment_string('foobar1'))