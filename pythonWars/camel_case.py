
def camel_case(string):
    return ''.join([i.capitalize() for i in string.split(' ')])

print(camel_case('test case'))
print(camel_case('camel case method'))
print(camel_case(''))