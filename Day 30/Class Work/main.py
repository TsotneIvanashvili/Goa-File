# მეთოდი არის ფუნქცია, რომელიც "ეკუთვნის" კონკრეტულ ობიექტს (მაგ: სტრინგს, სიას, ლექსიკონს).
# სინტაქსი: ობიექტი.მეთოდი(არგუმენტები)
# მაგალითად: text.upper() — აქ text არის სტრინგი, ხოლო upper() არის მისი მეთოდი.


# upper() — ყველა ასოს გადააქცევს დიდ ასოებად
text = "python"
print(text.upper())   # PYTHON

# lower() — ყველა ასოს გადააქცევს პატარა ასოებად
text = "PYTHON"
print(text.lower())   # python

# capitalize() — მხოლოდ პირველ ასოს გაადიდებს, დანარჩენს დააპატარავებს
text = "python programming"
print(text.capitalize())   # Python programming

# find() — მოძებნის სიმბოლოს ან სიტყვას და დააბრუნებს მის ინდექსს (პირველი occurrence)
text = "hello world"
print(text.find("world"))  # 6

# count() — დაითვლის რამდენჯერ გვხვდება კონკრეტული სიმბოლო ან სიტყვა
text = "banana"
print(text.count("a"))     # 3

# isupper() — ამოწმებს არის თუ არა ყველა ასო დიდი
text = "HELLO"
print(text.isupper())      # True

# islower() — ამოწმებს არის თუ არა ყველა ასო პატარა
text = "hello"
print(text.islower())      # True

# startswith() — ამოწმებს იწყება თუ არა სტრინგი კონკრეტული სიტყვით/სიმბოლოთი
text = "python"
print(text.startswith("py"))   # True

# endswith() — ამოწმებს მთავრდება თუ არა სტრინგი კონკრეტული სიტყვით/სიმბოლოთი
text = "python"
print(text.endswith("on"))     # True

# isalnum() — ამოწმებს შეიცავს თუ არა სტრინგი მხოლოდ ასოებს და ციფრებს (არა სიმბოლოებს)
text = "abc123"
print(text.isalnum())      # True

# isalpha() — ამოწმებს შეიცავს თუ არა სტრინგი მხოლოდ ასოებს
text = "hello"
print(text.isalpha())      # True

# isdigit() — ამოწმებს შეიცავს თუ არა სტრინგი მხოლოდ ციფრებს
text = "2026"
print(text.isdigit())      # True

# swapcase() — ყველა დიდი ასო გადააქცევს პატარა ასოდ და პირიქით
text = "PyThOn"
print(text.swapcase())     # pYtHoN