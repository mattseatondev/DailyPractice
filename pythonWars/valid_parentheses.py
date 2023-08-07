
def valid_parentheses(string):
    close_index = []
    for x, y in enumerate(string):
        if y == ')':
            string = string

print(valid_parentheses("(())((()())())"))
print(valid_parentheses("hi())("))