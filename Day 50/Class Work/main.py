# 1)
# indexError - ჩნდება სიაში არარსებული ინდექსის გამოყენების დროს 
names = ["tsotne", "Nika", "Gio"]

print(names[5])

# nameError - ჩნდება არარსებული ცვლადის სახელის გამოყენების დროს
a = 5
b = 6
print(a + r)

# typeError - ჩნდება არასწორი მონაცემთა ტიპის გამოყენების დროს
num = [0, 5, 10, 11, "Tsotne"]

print(sum(num))

# syntaxError - ჩნდება არასწორი კოდის სტრუქტურის შემთხვევაში
# print("tsotne"


# keyError - არის ლექსიკონში არარსებული გასაღები
data = {
    "name": "Alice",
    "age": 25
}

print(data["city"]) 

# zeroDivision - არის ნულზე გაყოფის ერორი

print(10 / 0)

# 2)შექმენით ორი ცვლადი a=5 და b=0 და try ბლოკში გააკეთე a/b და დაბეჭდე,დაიჭირეთ შესაბამისი ერორი except ის საშუალებით და დაუბეჭდეთ რომ "0ზე გაყოფა არ შეიძლება!"

a = 5
b = 0

try:
    a / b
except ZeroDivisionError:
    print("0ზე გაყოფა არ შეიძლება!")
except KeyError:
    print(5+1)
