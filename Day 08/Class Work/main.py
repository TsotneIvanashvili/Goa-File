# type() ფუნქცია აბრუნებს მონაცემის ან ცვლადის მონაცემთა ტიპს
# მაგალითად: int, float, str, bool და ა.შ.


age = input("შეიყვანეთ თქვენი ასაკი: ")
print(type(age))  
# input()-ით შეყვანილი მნიშვნელობა ყოველთვის არის str (ტექსტი)


value1 = input("შეიყვანეთ ტექსტი: ")          # str
value2 = int(input("შეიყვანეთ მთელი რიცხვი: "))  # int
value3 = float(input("შეიყვანეთ ათწილადი რიცხვი: "))  # float
value4 = True                                # bool (ლოგიკური მნიშვნელობა)

print(type(value1))
print(type(value2))
print(type(value3))
print(type(value4))




name = "Giorgi"     # str
surname = "Beridze" # str
age = 18            # int
height = 1.75       # float

print(type(name))
print(type(surname))
print(type(age))
print(type(height))
