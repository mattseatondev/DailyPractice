
def cakes(recipe, available):
    # totals = []
    # for i in recipe.keys():
    #     totals.append(available[i] // recipe[i] if i in available.keys() else 0)

    return min([(available[i] // recipe[i]) if i in available.keys() else 0 for i in recipe.keys()])

    print(totals)

        # if i in available.keys():
        #     print(i)
        # else:
        #     print(f'{i} not available')
    #     if available[i]:
    #         totals.append(available[i]//recipe[i])
    #     else:
    #         totals.append(0)
    # print(totals, 'totals')
    # return sorted(totals)[0] if sorted else 0

print(cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}))
print(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, {"sugar": 500, "flour": 2000, "milk": 2000}))