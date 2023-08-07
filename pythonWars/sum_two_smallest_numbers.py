
def sum_two_smallest_numbers(numbers):
    return (nsort := __builtins__.sorted(numbers))[0] + nsort[1]

print(sum_two_smallest_numbers([25, 42, 12, 18, 22]))