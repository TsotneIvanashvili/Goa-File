# ასაკი
age = int(input("შეიყვანეთ თქვენი ასაკი: "))

# სახელი და გვარი
first_name = "გიორგი"
last_name = "ივანაშვილი"

# for loop-ის გამოყენება
for i in range(age):  # range(age) გამოიტანს 0-დან (age-1) მომენტამდე
    print(first_name, last_name)


for i in range(1, 21):  # range(start, stop) — stop ჩათვლით არაა
    print(i)


for i in range(20, -1, -1):  # range(start, stop, step) — step = -1 უკუღმა
    print(i)


i = 10
while i <= 15:
    print(i)
    i += 1



i = 50
while i >= 0:
    print(i)
    i -= 1



i = 10
while i <= 70:
    if i % 2 == 0:  # ლუწობის შემოწმება
        print(i)
    i += 1




i = 25
while i <= 55:
    if i % 2 != 0:  # კენტობის შემოწმება
        print(i)
    i += 1
