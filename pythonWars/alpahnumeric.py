
def alphanumeric(password):
    import re
    pattern = '^[A-Za-z0-9]+$'
    if (re.match(pattern, password)):
        return True
    else: return False


print(alphanumeric("PassW0rd"))
print(alphanumeric("     "))