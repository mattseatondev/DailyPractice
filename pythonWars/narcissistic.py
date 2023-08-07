
def narcissistic(value):
    return sum(int(x) ** len(str(value)) for x in str(value)) == value

print(narcissistic(7))
print(narcissistic(371))
print(narcissistic(122))