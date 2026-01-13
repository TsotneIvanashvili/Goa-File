# Python–ში ჩვენ ვსწავლობთ:

# 1) ცვლადები
name = "Tsotne"  # ცვლადში ვიმახსოვრებთ ტექსტს
age = 18         # ცვლადში ვიმახსოვრებთ რიცხვს

# 2) if, elif, else პირობა
if age >= 18:
    print("სრულწლოვანი")
else:
    print(" არასრულწლოვანი")

# 3) for ციკლი
for i in range(5):
    print(i)  # დაბეჭდავს 0,1,2,3,4

# 4) while ციკლი
i = 0
while i < 5:
    print(i)
    i += 1

# 5) list და ციკლი
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 6) მომხმარებლის შეყვანა (input)
user_number = int(input("შეიყვანე რიცხვი: "))
print("შენ შეყვანე:", user_number)

# 7) ოპერაციები და % (modulo)
if user_number % 2 == 0:
    print("Even")
else:
    print("Odd")
