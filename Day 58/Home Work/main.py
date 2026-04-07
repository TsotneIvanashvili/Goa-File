# Map:
# 1.გაქვთ ლისტი: [1, 2, 3, 4, 5].
# გამოიყენეთ map, რომ შექმნათ ახალი ლისტი, სადაც ყველა ელემენტი გაორმაგებული იქნება.
numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))

print(doubled)
# [2, 4, 6, 8, 10]


# 2.გაქვთ ლისტი: ["apple", "banana", "cherry"].
# გამოიყენეთ map, რომ ყველა სიტყვის პირველი ასო დიდი იყოს.

fruits = ["apple", "banana", "cherry"]

capitalized = list(map(lambda word: word.capitalize(), fruits))

print(capitalized)
# ['Apple', 'Banana', 'Cherry']

# 3.გაქვთ ლისტი: [10, 20, 30, 40].
# გამოიყენეთ map, რომ თითოეული ელემენტი 5-ით გაზარდოთ.
nums = [10, 20, 30, 40]

increased = list(map(lambda x: x + 5, nums))

print(increased)
# [15, 25, 35, 45]







# Filter:
# 1.გაქვთ ლისტი: [5, 12, 8, 20, 7].
# გამოიყენეთ filter, რომ ახალი ლისტი მოიქმნას მხოლოდ იმ ელემენტებით, რომლებიც მეტია 10-ზე.
# [12, 20]


arr1 = [5, 12, 8, 20, 7]

greater_than_ten = list(filter(lambda x: x > 10, arr1))

print(greater_than_ten)

# 2.გაქვთ ლისტი: ["cat", "dog", "elephant", "ant"].
# გამოიყენეთ filter, რომ მოიშალოს მხოლოდ ის სიტყვები, რომლებიც 3 ან ნაკლები ასოსგან შედგება.
# ['elephant']
animals = ["cat", "dog", "elephant", "ant"]

long_words = list(filter(lambda word: len(word) > 3, animals))

print(long_words)

# 3გაქვთ ლისტი: [2, 3, 4, 5, 6].
# გამოიყენეთ filter, რომ დარჩეს მხოლოდ ლუწი რიცხვები.


numbers2 = [2, 3, 4, 5, 6]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers2))

print(even_numbers)
# [2, 4, 6]