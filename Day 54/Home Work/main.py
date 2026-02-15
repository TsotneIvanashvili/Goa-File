# 1) კვადრატი
square = lambda x: x ** 2
print("1)", square(5))  # 25

# 2) გამრავლება
multiply = lambda x, y: x * y
print("2)", multiply(3, 4))  # 12

# 3) ტემპერატურა
celsius_to_fahrenheit = lambda c: c * 1.8 + 32
print("3)", celsius_to_fahrenheit(100))  # 212.0

# 4) ლუწი/კენტი
is_even = lambda x: x % 2 == 0
print("4)", is_even(4), is_even(7))  # True False

# 5) სტრიქონის სიგრძე
str_len = lambda s: len(s)
print("5)", str_len("გამარჯობა"))  # 9

# 6) სახელების დალაგება სიგრძით
names = ["დათო", "ეკა", "ალექსანდრე", "გია"]
print("6)", sorted(names, key=lambda x: len(x)))

# 7) ბოლო ასოს მიხედვით
print("7)", sorted(names, key=lambda x: x[-1]))

# 8) კოორდინატები Y-ის მიხედვით
points = [(1, 5), (8, 2), (4, 10)]
print("8)", sorted(points, key=lambda p: p[1]))

# 9) პროდუქტები ფასით
products = [{"name": "პური", "price": 1.2}, {"name": "რძე", "price": 4.5}, {"name": "ყველი", "price": 12.0}]
print("9)", sorted(products, key=lambda p: p["price"]))

# 10) Case-Insensitive დალაგება
fruits = ["banana", "Apple", "cherry", "Berry"]
print("10)", sorted(fruits, key=lambda s: s.lower()))

# 11) ასაკის კონტროლი
age_check = lambda age: "Adult" if age >= 18 else "Minor"
print("11)", age_check(20), age_check(15))  # Adult Minor

# 12) დადებითი/უარყოფითი
sign = lambda x: "Positive" if x > 0 else ("Negative" if x < 0 else "Zero")
print("12)", sign(5), sign(-3), sign(0))  # Positive Negative Zero