print()        # ბეჭდავს ცარიელ ხაზს
s = str()      # '' — ცარიელი სტრინგი
n = int()      # 0
f = float()    # 0.0
b = bool()     # False
L = list()     # []
D = dict()     # {}
S = set()      # set()
name = input() # მუშაობს არგუმენტის გარეშე; სურვილისამებრ შეიძლება prompt-იც


len()        # TypeError: len() takes exactly one argument (0 given)
sum()        # TypeError: sum() takes at least 1 positional argument (0 given)
max()        # TypeError: max expected at least 1 argument, got 0
min()        # TypeError: min expected at least 1 argument, got 0
sorted()     # TypeError: sorted() takes at least 1 positional argument (0 given)
range()      # TypeError: range expected at least 1 argument, got 0
any()        # TypeError: any() takes exactly one argument (0 given)
all()        # TypeError: all() takes exactly one argument (0 given)
enumerate()  # TypeError: enumerate() takes exactly one argument (0 given)

text = "hello"
result = text.upper()  # სტრინგის მეთოდი upper() — დოტნოტაცია

class User:
    def __init__(self, name):
        self.name = name

u = User("tsotne")
print(u.name)  # ატრიბუტი name — დოტნოტაცია


import math
r = math.sqrt(9)  # sqrt მოდულიდან — დოტნოტაცია



name = "tsotne"
upper_name = name.upper()
print(upper_name)  # TSOTNE



sport = "FOOTBALL"
lower_sport = sport.lower()
print(lower_sport)  # football



surname = "Ivanashvili"
capitalized_surname = surname.capitalize()
print(capitalized_surname)  # Beridze