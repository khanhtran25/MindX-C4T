items = [5,1,6,8,7,4,3,9]
for i in range(len(items)):
    n = int(items[i])%2
    if n==0:
        print(items[i])
    
m = input("Enter number list: ")
e = m.split(",")
for i in range(len(e)):
    p = int(e[i])%2
    if p==0:
        print(e[i])
        