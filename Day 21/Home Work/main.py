# მომხმარებლის მიერ შეყვანილი რიცხვი
num = int(input("შეიყვანეთ რიცხვი: "))

# ლუწობის შემოწმება
if num % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")


for i in range(1, 201, 4):  # range(start, stop, step)
    print(i)


i = 1
while i <= 20:
    print(i)
    i += 2


# OR ოპერატორი → True თუ ერთ-ერთი პირობა სწორია
# False მაგალითები
print(False or False)   # False
print(0 or False)       # False
print("" or False)      # False
print(3<1 or 5<2)       # False
print(None or False)    # False

# True მაგალითები
print(True or False)    # True
print(0 or True)        # True
print("" or 5>2)        # True
print(3==3 or False)    # True
print(None or "Hello")  # True




# AND ოპერატორი → True მხოლოდ მაშინ, როცა ორივე პირობა სწორია
# False მაგალითები
print(True and False)   # False
print(False and False)  # False
print(0>1 and True)     # False
print(5==5 and 3>10)   # False
print("" and True)      # False

# True მაგალითები
print(True and True)    # True
print(5>2 and 3<10)    # True
print(1!=0 and 4==4)   # True
print("a"=="a" and 2<=2)  # True
print(3>1 and 7<10)    # True
