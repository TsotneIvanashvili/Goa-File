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

names = ["tsotne", "Alisoha", "Nika", "Gio", "Sandro"]
names2 = []

for i in names :
    if "a" in i:
        names2.append(i)

print(names2)