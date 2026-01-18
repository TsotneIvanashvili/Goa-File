# 1) შექმენი სეტი სახელად fruits მასში შეინახეთ შესაბამისი 5 მნიშვნელობა. წაშალეთ ერთი ნებისმიერი ხილი, ჩაამატეთ თქვენი საყვარელი ხილი, შექმენით მეორე სეტი სახელად fruits1 შეინახეთ ორი მნიშვნელობა, ეს ორი სეტი ერთმანეთთან გააერთიანეთ და იპოვეთ ამ ორ სეტს შორის განსხვავება.

fruits = {"watermelon", "cherry", "blueberry", "melon", "apple"}
fruits.remove("apple")
fruits.add("bannana")


fruits1 = {"pineapple", "apple"}

union = fruits.union(fruits1)
fruits.difference(union)


# 2) დღევანდელ გაკვეთილზე ნასწავლი მეთოდები კომენტარის სახით ახსენით.

#.add() - გამოიყენება სეტში ელემენტის ჩასამატებლად
#.Remove() - გამოიყენება სეტიდან ელემენტის წასაშლელად
#.difference() - აბრუნებს სეტს რომელშიც არის ის ელემენტები რაც არის პირველში და სხვებში არა
#.union() - აერთიანებს სეტებს და ხდის ერთ სეტს
#.clear() - ასუფთავებს სეტს
#.discard() - შლის ელემენტს სეტიდან 
#.get() - გამოიყენება dictionary-დან მნიშვნელობის ამოსაღებად
#.keys() - აბრუნებს ყველა გასაღების კოლექციას dictionary-ში
#.items() - აბრუნებს გასაღებისა და ირებულების წყვილების კოლექციას



# 3) შექმენი dictionary სადაც გექნება: სახელი, გვარი, ასაკი, საყვარელი სპორტი, საბოლოოდ დაბეჭდეთ გასაღებები, მნიშვნელობა და ყველა ერთად.

user = {
    "name": "Tsotne",
    "Lname": "Ivanashvili",
    "age": 17,
    "favSport": "Volleyball"
}


print(user.keys())


# DAMATEBITI!!!

#1)
names = ["tsotne", "Alisoha", "Nika", "Gio", "Sandro"]
names2 = []

for i in names :
    if "a" in i:
        names2.append(i)

print(names2)




#2)You are given a list of usernames. Create a new list that contains only usernames longer than 5 characters.
user = ["alex", "charlotte", "max", "daniel", "li"]
newUser = []

for i in user:
    if len(i) > 5:
        newUser.append(i)

print(newUser)




# 3)Given a list of numbers, create a new list where: Only positive numbers are kept, Each kept number is multiplied by 10

nums = [-3, 0, 2, 5, -1]
positiveNums = []

for i in nums:
    if i > 0 :
        i = i * 10
        positiveNums.append(i)

print(positiveNums)



# 4)Given a list of words, count how many words contain the letter “e”.

words = ["tree", "sun", "pen", "sky", "apple"]
count = 0
for i in words:
    if "e" in i:
       count += 1

print(count)


# 5)Given a list of numbers, find the largest even number.
number = [3, 7, 2, 9, 10, 5]
maxx = []

for i in number:
    if i % 2 == 0:
        maxx.append(i)

if len(maxx) == 0:
    print("There Are No Even Numbers")
else:
    print(f"Biggest Even Number: {max(maxx)}")


