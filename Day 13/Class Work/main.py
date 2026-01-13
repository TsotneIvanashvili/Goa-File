num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))

# ორივე უნდა იყოს დადებითი (> 0)
print(num1 > 0 and num2 > 0)


email = "test@gmail.com"
password = "12345"

user_email = input("შეიყვანეთ email: ")
user_password = input("შეიყვანეთ password: ")

# ორივე პირობა უნდა იყოს ჭეშმარიტი
print(email == user_email and password == user_password)




print(12 == 13 or 12 == 12 and 21 > 20)

# ახსნა:
# ჯერ სრულდება AND ოპერატორი
# 12 == 12 → True
# 21 > 20 → True
# True and True → True
#
# შემდეგ სრულდება OR ოპერატორი
# 12 == 13 → False
# False or True → True
#
# საბოლოო შედეგი იქნება: True




age = int(input("შეიყვანეთ თქვენი ასაკი: "))

print(age >= 18)  # True თუ სრულწლოვანია, False თუ არა




role = input("შეიყვანეთ თქვენი როლი (admin/moderator/user): ")

print(role == "admin")




# შედარების ოპერატორები:
# ==  ტოლია
# !=  არ არის ტოლი
# >   მეტია
# <   ნაკლებია
# >=  მეტია ან ტოლია
# <=  ნაკლებია ან ტოლია

# ლოგიკური ოპერატორები:
# and — აბრუნებს True-ს თუ ორივე პირობა არის True
# or  — აბრუნებს True-ს თუ ერთ-ერთი პირობა მაინც არის True
# not — ცვლის მნიშვნელობას (True → False, False → True)
