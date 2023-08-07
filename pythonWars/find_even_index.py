
def find_even_index(arr):
    return -1 if not (a := [i for i in range(len(arr)) if sum(arr[i + 1:]) == sum(arr[:i])]) else a[0]

print(find_even_index([1,2,3,4,3,2,1]))
print(find_even_index([10,-80,10,10,15,35,20]))
print(find_even_index(list(range(1, 100))))