# მომხმარებლის მიერ შეყვანილი სეზონი
season = input("შეიყვანეთ სეზონი (გაზაფხული, ზაფხული, შემოდგომა, ზამთარი): ")

# კონდიციები
if season == "გაზაფხული":
    print(1)
elif season == "ზაფხული":
    print(2)
elif season == "შემოდგომა":
    print(3)
elif season == "ზამთარი":
    print(4)
else:
    print("error")




# ჩემი საყვარელი რიცხვი
favorite_number = 7

# მომხმარებლის მიერ შეყვანილი რიცხვი
user_number = int(input("შეიყვანეთ ნებისმიერი რიცხვი: "))

if user_number == favorite_number:
    print(f"ეს არის ჩემი საყვარელი რიცხვი! {user_number}")
else:
    print("ეს არ არის ჩემი საყვარელი რიცხვი")




# ჩემი საყვარელი ფერი
favorite_color = "ლურჯი"

# მომხმარებლის მიერ შეყვანილი ფერი
user_color = input("შეიყვანეთ ნებისმიერი ფერი: ")

if user_color == favorite_color:
    print("ეს არის ჩემი საყვარელი ფერი")
else:
    print("ეს არ არის ჩემი საყვარელი ფერი")
