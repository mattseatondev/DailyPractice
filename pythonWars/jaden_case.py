
def to_jaden_case(string):
    num_list = string.split(' ')
    num_str = " ".join(__builtins__.str(item.capitalize()) for item in num_list)
    return num_str
    # print(num_str)
    # for x, i in enumerate(num_list):
    #     print(i, x)
    #     if (x == len(num_list)):
    #         num_str = num_str + i.capitalize()
    #     else:
    #         num_str = num_str + (i.capitalize() + ' ')
    # print(num_str)

str = "How can mirrors be real if our eyes aren't real"
if __name__ == '__main__': to_jaden_case(str)