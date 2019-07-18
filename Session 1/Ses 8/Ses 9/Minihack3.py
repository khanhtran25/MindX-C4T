items = [5,8,-99,-86,13]
d = int(input("Enter a number: "))
# for i in range(len(items)):

if d in items:
       print("Found, position",items.index(d))
else:
    print("Hung Phan")
        
e = sum(items)
print(e)

calc = 0
for i in range(len(items)):
    calc = calc + items[i]
    
print(calc)

f = input("Enter number list: ")
g = f.split(" ")
print(g)
h = 0
for i in range(len(g)):
    h = h + int(g[i])
print(h)
