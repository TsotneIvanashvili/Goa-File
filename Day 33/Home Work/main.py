# სია სხვადასხვა ტიპის ელემენტებით
my_list = [10, "Hello", 3.14, True, "RemoveMe", [1,2,3], "Python"]

# მე-5 ელემენტის წაშლა (ინდექსი 4)
my_list.pop(4)

# სიის ბოლოს გვარის დამატება
my_list.append("ივანაშვილი")

print(my_list)


numbers = list(range(1, 11))  # [1,2,3,4,5,6,7,8,9,10]

# პირველი 5 ელემენტის დაბეჭდვა
print(numbers[:5])


for i in range(1, 21):
    if i % 2 == 0:  # ლუწი
        print(i)


def multiply(a, b):
    return a * b

# ტესტირება
result = multiply(5, 6)
print(result)  # 30


def check_even_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

# ტესტირება
check_even_odd(7)  # Odd
check_even_odd(12) # Even
