# 8 Kyu
# 1.MakeUpperCase
def make_upper_case(s):
    return s.upper()


# 2.Beginner Series #1 School Paperwork
def paperwork(n, m):
    if n > 0 and m > 0:
        return n * m
    else:
        return 0
    

# 3.Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name.startswith("r") or name.startswith("R"):
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"


# 4.Simple multiplication
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
    

# 5.Abbreviate a Two Word Name
def abbrev_name(name):
    names = name.split()
    name2 = []
    
    for i in names:
        name2.append(i[0].upper())
        
    return ".".join(name2)


# 6.A Needle in the Haystack
def find_needle(haystack):
    x = haystack.index("needle")
    return f"found the needle at position {x}"


# 7.Calculate average
def find_average(numbers):
    
    if len(numbers) <= 0:
        return 0
    
    jami = 0
    for i in numbers:
            jami += i

        
    return jami / len(numbers)


# 8.Invert values
def invert(lst):
    newLst = []
    
    for i in lst:
        newLst.append(-i)
        
    return newLst


# 9.Sentence Smash
def smash(words):
    return " ".join(words)
    

# 10.How good are you really?
def better_than_average(class_points, your_points):
    jami = 0
    
    for i in class_points:
        jami += i
        
    jami = jami / len(class_points)
    if jami >= your_points:
        return False
    else:
        return True
    


# 11.Beginner - Reduce but Grow
def grow(arr):
    jami = 1
    
    for i in arr:
        jami *= i
        
    return jami

# 12.Count of positives / sum of negatives
def count_positives_sum_negatives(arr):
    
    if len(arr) == 0:
        return []
    
    newArr = []
    jami = 0
    
    for i in arr:
        if i > 0:
            newArr.append(i)
        else:
            jami += i
    
    return [len(newArr), jami]
                
# 13. Is he gonna survive?
def hero(bullets, dragons):
    dragons = dragons * 2 
    
    
    if bullets >= dragons:
        return True
    else:
        return False
    

# 14.DNA to RNA Conversion
def dna_to_rna(dna):
    
    dna = list(dna)
    newLst = []
    
    for i in dna:
        if i == "T":
            newLst.append("U")
        elif i == "U":
            newLst.append("T")
        else:
            newLst.append(i)
        
    return "".join(newLst)



# 15. You only need one - Beginner
def check(seq, elem):
    if elem in seq:
        return True
    else:
        return False
    

# 16. Will you make it?
def zero_fuel(distance_to_pump, mpg, fuel_left):
    
    final = mpg * fuel_left
    if final >= distance_to_pump:
        return True
    else:
        return False

# 17. Convert a string to an array
def string_to_array(s):
    s = s.split()
    if len(s) <= 0:
        return ['']
    else:
        return s
    

# 18. Find Maximum and Minimum Values of a List
def minimum(arr):
    return min(arr)
def maximum(arr):
    return max(arr)


# 19. Fake Binary
def fake_bin(x):
    x = list(x)
    newLst = []
    
    for i in x:
        if int(i) >= 5:
            newLst.append("1")
        else:
            newLst.append("0")
            
    return "".join(newLst)


# 20. Reversed sequence
def reverse_seq(n):
    lst = []
    
    while n >0:
        lst.append(n)
        n -= 1
        
    return lst


# 21. Quarter of the year
def quarter_of(month):
    if 1<= month <= 3:
        return 1
    elif 3< month <= 6:
        return 2
    elif 6 < month <=9:
        return 3
    else:
        return 4
    

# 22. Transportation on vacation
def rental_car_cost(d):
    if 7 > d >= 3:
        return (d * 40) - 20
    elif d >= 7:
        return (d * 40) - 50
    else:
        return d * 40
    
# 23. Is n divisible by x and y?
def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False
    
# 24. Volume of a Cuboid
def get_volume_of_cuboid(length, width, height):
    return length * width * height


# 25. Area or Perimeter
def area_or_perimeter(l , w):
    if l == w:
        return l * w
    else:
        return (l+w)*2

# 26. Total amount of points
def points(games):
    
    count = 0
    
    for i in games:
        if int(i[0]) > int(i[-1]):
            count += 3
        elif int(i[0]) == int(i[-1]):
            count += 1
                
    return count


# 27. Third Angle of a Triangle
def other_angle(a, b):
    return 180-a-b




# 28. Thinkful - Logic Drills: Traffic light
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"

# 29. Sum without highest and lowest number
def sum_array(arr):
    
    if type(arr) != list:
        return 0
    
    arr.sort()
    if len(arr) > 1:
        return sum(arr[1:-1])
    else:
        return 0
    
# 30. Sum Mixed Array
def sum_mix(arr):
    total = 0
    for i in arr:
        total += int(i)
        
    return total


# 31. Double Char
def double_char(s):
    char = ""
    
    for i in s:
        char += i * 2
        
    return char







# 7 Kyu

# 1. Exes and Ohs
def xo(s):
    x = 0
    o = 0
    s = s.lower()
    for i in s:
        if i == "x":
            x += 1
        elif i == "o":
            o += 1
    if x == o:
        return True
    else:
        return False
    

# 2. Jaden Casing Strings
def to_jaden_case(string):
    string = string.split(" ")
    lst = []
    
    for i in string:
        lst.append(i.capitalize())
    return " ".join(lst)


# 3. Shortest Word
def find_short(s):
    s = s.split(" ")   
    lst = []
    
    for i in s:
        lst.append(len(i))
        
    lst.sort()
    
    return lst[0]

# 4. Mumbling
def accum(st):
    lst = list(st)
    lst2 = []
    lst3 = []
    count = 1
    
    for i in lst:
        lst2.append(i.lower()*count)
        count+=1
    
    for i in lst2:
        lst3.append(i.capitalize())
        
    return "-".join(lst3)


# 5. Complementary DNA
def DNA_strand(dna):
    stringi = ""
    
    for i in dna:
        if i == "A":
            stringi+= "T"
        elif i == "T":
            stringi += "A"
        elif i == "G":
            stringi += "C"
        elif i == "C":
            stringi += "G"
    return stringi


# 6. Beginner Series #3 Sum of Numbers
def get_sum(a,b):
    count = 0
    sorted = [a,b]
    sorted.sort()
    a = sorted[0]
    b = sorted[1]
        
    for i in range(a,b+1):
        count += i        
        
        
    return count


# 7. Friend or Foe?
def friend(x):
    friends = []
    
    
    for i in x:
        if len(i) == 4:
            friends.append(i)
        
    return friends


# 8. Credit Card Mask
def maskify(cc):
    a = ""
    for i in range(len(cc)-4):
        a+= "#"
    
    a += cc[-4::]
    
    return a


# 9. Regex validate PIN code
def validate_pin(pin):
    
    if len(pin) != 4 and len(pin) != 6:
        return False
    
    nums = "1234567890"
    
    
    for i in pin:
        if i not in nums:
            return False
            
    return True
    
    
# 10. Isograms
def is_isogram(string):
    
    count = 0
    
    if len(string) == 0:
        return True
    
    string = string.lower()
    
    for i in string:
        if string.count(i) > 1:
            count += 1

            
    if count > 0:
        return False
    else:
        return True
    


# 11. Binary Addition

def add_binary(a,b):
    
    sum = a+b
    if sum == 1:
        return "1"
    res = sum // 2
    reminder = str(sum % res)
    
    
    while res > 0:
        reminder +=  str(res% 2 )
        res = res // 2
        
    return reminder[::-1]


# 12. Get the Middle Character
def get_middle(s):
    if len(s) % 2 == 0:
        return s[len(s) // 2 - 1] + s[len(s) // 2]
    else:
        return s[len(s) // 2]










# 6 Kyu

# 1. Who likes it?
def likes(names):
    count = len(names)
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    elif len(names) >= 4:
        return f"{names[0]}, {names[1]} and {count-2} others like this"




# 2. Create Phone Number
def create_phone_number(n):
    return f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}"




# 3.Find the odd int
def find_it(seq):
    count = 0
    
    for i in seq:
        count += seq.count(i)
        if count % 2 > 0:
            return i
        

# 4. Multiples of 3 or 5
def solution(number):
    
    num = 0
    for i in range(number):
        if i % 3 == 0:
            num += i
        elif i % 5 == 0:
            num += i
    return num
            


# 5. Array.diff
def array_diff(a, b):
    lst = []
    
    for i in a:
        if i not in b:
            lst.append(i)
            
    return lst


# 6. Stop gninnipS My sdroW!
def spin_words(sentence):
    lst = sentence.split(" ")
    newLst = []
    
    for i in lst:
        
        if len(i) > 0 and len(i) <= 4:
            newLst.append(i)
        elif len(i) >= 5:
            newLst.append(i[::-1])

        
            
    return " ".join(newLst)


# 7. Sum of Digits / Digital Root
def digital_root(n):
    while n > 9:
        n = sum(int(i) for i in str(n))
    return n
    































