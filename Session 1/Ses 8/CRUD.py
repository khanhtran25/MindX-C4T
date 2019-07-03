items = [ 'com', 'pho', 'bun']
print(*items, sep= ", ")

C = "Create"
c = "create"
R = "Read" 
r = "read"
U = "Update" 
u = "update"
D = "Delete" 
d = "delete"

while True:

    x = input("Choose an action to proceed: ")

    if x == C or x == c :
        n = input("What do u want to add: ")
        items.append(n)
        print(*items, sep= ", ")
    elif x == R or x == r :
        for item in range(len(items)):
            print(item)
    elif x == U or x == u :
        i = int(input("Enter food number: "))
        newfood = input("Replace with a new food: ")
        items[i] = newfood
        print(*items, sep= ", ")
    elif x == D or x == d:
        m = int(input("Enter food number to delete: "))
        items.pop(m)
        print(*items, sep= ", ")

