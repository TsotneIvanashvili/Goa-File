# 2) შექმენი სეტი სახელად freands_goa სადაც ჩაწერთ დაახლოებით ხუთ ადამიანს რომლებიც გოაში გაიცანით და დამეგობრდით, 
# შექმენით მეორე ცვლადი სახელად freands სადაც შეიყვანთ 5 მეგობარს რომლებიც გოაში შემოსვლამდე გაიცანით, 
# ეს ორი სეტი გააერთიანეთ ერთმანეთთან და იპოვეთ მათ შორის განსხვავება.

friends_goa = {"Nika", "Giorgi", "Lika", "Babi", "Tornike"}
friends = {"Nika", "Sandro", "Zura", "Temo", "Tornike"}

friendGroup = friends_goa.union(friends)
print(friendGroup.difference())



# 3) შექმენით სეტი სახელად cars სადაც გადაცემთ რამოდენიმე მანქანის მოდელს საბოლოოდ წაშალეთ ყველაზე ნაკლებად რომელიც არ მოგწონთ ის და დაამატეთ თქვენი საუკეთესო მანქანის მოდელი.

cars = {"BMW", "Audi", "Toyota", "Jeep"}
cars.remove("Toyota")
cars.add("Mercedes")


# 4) შექმენი dictionary სადაც გექნებათ: სახელი, გვარი, საკვარელი მანქანა და საყვარელი პროგრამირების აკადემია საბოლოოდ დაბეჭდეთ საყვარელი მანქანის მნიშვნელობა.

about = {
    "name":"Tsotne",
    "Lname":"Ivanashvili",
    "favCar":"Mercedes",
    "favAcademy":"Goa"
}

print(about["favCar"])

