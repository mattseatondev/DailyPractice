
def is_valid_walk(walk):
    bal = [('n', 's'), ('e', 'w')]
    return len(walk) == 10 and not len([i for i in bal if walk.count(bal[0]) != walk.count(bal[1])])

    # for i in bal:
    #     if walk.count(bal[0]) != walk.count(bal[1]):
    #         return False

print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']))