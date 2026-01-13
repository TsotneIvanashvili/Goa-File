# .append() — სიაში ამატებს ახალ ელემენტს ბოლოში
numbers = [1, 2, 3]
numbers.append(4)        # [1, 2, 3, 4]
numbers.append("hello")  # [1, 2, 3, 4, 'hello']


# .clear() — ასუფთავებს სიას, ყველა ელემენტი წაიშლება
items = [10, 20, 30]
items.clear()            # []
letters = ["a", "b", "c"]
letters.clear()          # []


# .copy() — ქმნის სიის ასლს (ახალი ობიექტი)
a = [1, 2, 3]
b = a.copy()             # b = [1, 2, 3]
fruits = ["apple", "banana"]
new_fruits = fruits.copy()  # ['apple', 'banana']


# .count() — დაითვლის რამდენჯერ გვხვდება კონკრეტული ელემენტი
nums = [1, 2, 2, 3, 2]
nums.count(2)            # 3
letters = ["a", "b", "a", "c"]
letters.count("a")       # 2


# .extend() — სიას ბოლოში ამატებს სხვა სიის ელემენტებს
x = [1, 2]
x.extend([3, 4])         # [1, 2, 3, 4]
words = ["hi"]
words.extend(["hello", "bye"])  # ['hi', 'hello', 'bye']


# .index() — აბრუნებს ელემენტის პირველ ინდექსს
nums = [10, 20, 30, 20]
nums.index(20)           # 1
letters = ["a", "b", "c"]
letters.index("c")       # 2


# .insert() — ამატებს ელემენტს კონკრეტულ ინდექსზე
nums = [1, 2, 3]
nums.insert(1, 100)      # [1, 100, 2, 3]
letters = ["a", "c"]
letters.insert(1, "b")   # ['a', 'b', 'c']


# .pop() — შლის ელემენტს ინდექსით (ნაგულისხმევად ბოლო) და აბრუნებს მას
nums = [1, 2, 3]
removed = nums.pop()     # removed = 3, nums = [1, 2]
letters = ["a", "b", "c"]
letters.pop(1)           # 'b', ['a', 'c']


# .remove() — შლის კონკრეტულ ელემენტს (პირველ occurrence-ს)
nums = [1, 2, 3, 2]
nums.remove(2)           # [1, 3, 2]
letters = ["a", "b", "c"]
letters.remove("b")      # ['a', 'c']


# .reverse() — აბრუნებს სიას უკუღმა
nums = [1, 2, 3]
nums.reverse()           # [3, 2, 1]
letters = ["a", "b", "c"]
letters.reverse()        # ['c', 'b', 'a']


# .sort() — ალაგებს სიას ზრდადობით (ან კლებადობით reverse=True)
nums = [3, 1, 2]
nums.sort()              # [1, 2, 3]
letters = ["c", "a", "b"]
letters.sort(reverse=True)  # ['c', 'b', 'a']