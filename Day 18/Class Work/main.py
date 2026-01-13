# ქმნი ცვლადს საყვარელი სპორტისთვის
favorite_sport = "ფუტბოლი"

# for ციკლით გადავდივართ სიტყვაზე (each letter)
for letter in favorite_sport:
    print(letter)  # გამოიტანს საყვარელი სპორტის სახელი ცალ-ცალკე ასოებით


i = 1
while i <= 100:
    print(i)
    i += 4  # ყოველ იტერაციაზე 4–ს ვამატებთ


for num in range(0, 500):
    if num % 2 == 0:  # თუ რიცხვი ლუწია
        print(num)





# ვუშვებთ ციკლს სანამ მომხმარებელი არ შეიყვანს სწორ რიცხვს
correct_number = 7  # მაგალითად საყვარელი რიცხვი
while True:
    user_input = int(input("შეიყვანეთ თქვენი საყვარელი რიცხვი: "))
    if user_input == correct_number:
        print("სწორია! ეს პასუხი სწორია.")
        break  # ციკლი სრულდება
    else:
        print("მეტად არაა სწორად, სცადეთ თავიდან.")


for num in range(0, 21):
    if num % 2 == 0:
        print(num)



for num in range(1, 21, 2):
    print(num)




num = 0
while num <= 20:
    print(num)
    num += 2  # 0,2,4,...20
