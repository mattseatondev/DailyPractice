def open_or_senior(data):
    return ['Senior' if membership[0] >= 55 and membership[1] > 7 else 'Open' for membership in data]

print(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)]))