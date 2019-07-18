R = "Red"
B = "Blue"
T = "Teal"
items = [R, B, T]
print(*items, sep=", ")

n = input("Enter New Color: ")
items.append(n)
print(*items, sep=", ")

a = int(input("Enter color number: "))
print("Color at position",a,":",items[a-1])

for i,item in enumerate(items):
    print(i+1,".",item)

b = int(input("Enter color num to delete: "))
items.pop(b)
print(*items, sep=", ")
