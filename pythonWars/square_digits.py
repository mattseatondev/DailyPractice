def square_digits(num):
    return int(''.join([str(int(n)*int(n)) for n in list(str(num))]))
    
print(square_digits(9119), square_digits(493625))