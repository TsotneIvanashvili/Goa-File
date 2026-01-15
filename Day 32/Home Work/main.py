# პარამეტრი არის ცვლადი, რომელიც გადაეცემა ფუნქციას, რათა ფუნქციამ გამოიყენოს ეს მნიშვნელობა.
# მაგალითად:
# def greet(name): 
#     print("Hello", name)
# აქ name არის პარამეტრი.


def add_numbers(a, b):
    # ფუნქცია აბრუნებს a და b-ს ჯამს
    return a + b

# ტესტირება
result = add_numbers(10, 5)
print(result)  # 15


def check_even_odd(number):
    # თუ რიცხვი იყოფა 2-ზე ნაშთის გარეშე → ლუწი
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

# ტესტირება
check_even_odd(7)  # Odd
check_even_odd(12) # Even


def hello(name):
    print("gamarjoba", name)

# ეს კოდი გამოიძახებს ფუნქციას 2 არგუმენტით:
hello("nika", "saba")
