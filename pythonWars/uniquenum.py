
def uniquenum(arr):
    arr.sort()
    return arr[0] if arr[0] != arr[1] else arr[-1]

print(uniquenum([ 3, 10, 3, 3, 3 ]))