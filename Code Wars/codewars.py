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