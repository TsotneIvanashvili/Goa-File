# 1)სიის ელემენტის ამოღება ინდექსით
# დაწერე სია: nums = [10, 20, 30, 40]
# მომხმარებელი შეიყვანს ინდექსს და პროგრამა დაბეჭდავს შესაბამის ელემენტს.

nums = [10, 20, 30, 40]
user = int(input("Enter Index: "))

try:
    print(nums[user])
except IndexError:
    print(F"Element On The {user} index Does Not Exist")

# 2)ლექსიკონიდან (dict) მნიშვნელობის მიღება
# დაწერე dict: prices = {"apple": 2, "banana": 3}
# მომხმარებელი შეიყვანს პროდუქტს და დაბეჭდე ფასი prices[product].
# თუ ასეთი key არ არსებობს → დაიჭირე შეცდომა და დაბეჭდე: "ასეთი პროდუქტი ვერ მოიძებნა"(დაგჭირდებათ KeyError).

prices = {
    "apple": 2, 
    "banana": 3
}

product = input("Enter Product(apple, banana): ")

try:    
    print(prices[product.lower()])
except KeyError:
    print("Enter The Right Product")


# 3)სტრინგის რიცხვად გადაყვანა + დამატება
# მომხმარებელი შეიყვანს ორ მნიშვნელობას x და y (როგორც ტექსტი).
# შენი მიზანია გადაიყვანო int-ად და დაბეჭდო ჯამი.
# თუ რომელიმე არ არის რიცხვი → "მხოლოდ რიცხვები შეიყვანე".

x = input("Enter First Number: ")
y = input("Enter Second Number: ")



try:
    total = int(x) + int(y)
    print(total)
except TypeError:
    print("Enter Valid Number")