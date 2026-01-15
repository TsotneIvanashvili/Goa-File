word = input("შეიყვანეთ სიტყვა: ")

# 1. ყველა პატარა ასო
print(word.lower())

# 2. ყველა დიდი ასო
print(word.upper())

# 3. პირველი ასო დიდი, დანარჩენი პატარა
print(word.capitalize())


# მომხმარებლის მიერ შეყვანილი წინადადებები
sentence1 = input("შეიყვანეთ პირველი წინადადება: ")
sentence2 = input("შეიყვანეთ მეორე წინადადება: ")
sentence3 = input("შეიყვანეთ მესამე წინადადება: ")

# სხვადასხვა სტრინგის მეთოდი
print(sentence1.lower())      # პატარა ასოები
print(sentence2.upper())      # დიდი ასოები
print(sentence3.capitalize()) # მხოლოდ პირველი ასო დიდი, დანარჩენი პატარა


my_name = "Giorgi"

user_name = input("შეიყვანეთ თქვენი სახელი: ")

# შედარება .lower() მეთოდის გამოყენებით
if my_name.lower() == user_name.lower():
    print("Our names are similar!")
else:
    print("We have different names")


sentence = "tHIS is A Test sentence."

# capitalize() გამოყენებით
print(sentence.capitalize())


text = "Programming is fun"
letter_to_find = "g"

# ინდექსის მოძებნა
index = text.find(letter_to_find)
print(f"The letter '{letter_to_find}' is at index:", index)



words = ["apple", "banana", "cherry", "date"]

# for loop-ით ყველა ელემენტის uppercase
for i in range(len(words)):
    words[i] = words[i].upper()

print(words)
