#List 1
items = ["football", "Asphalt", "EDM"]
n = input("Enter new item: ")
items.append(n)
print(*items)

#List 2
print(*items, sep = ", ")

#List 3
print(*items, sep = " | ")

#Read 1
print(items[0], items[-1], items[-2])

#Read 2
print(items[0].upper(), items[-1].upper(), items[-2].upper())

#Update 1
items[0]=input("Enter ur favourite movie: ")
print(*items, sep = ", ")

#Update 2
items[3]=input("Enter ur favourite book: ")
print(*items, sep = ", ")

#Update 3
n = int(input("Enter number: "))
newthangs = input("Replace with new thangsssss: ")
items[n] = newthangs
print(*items, sep = ", ")

#Delete 1
items.pop(1)
print(*items, sep = ", ")

#Delete 2
# n = "LOL"
# items.remove(n)
# print(*items, sep = ", ")
n = "EDM"
items.remove(n)
print(*items, sep = ", ")

#Delete by input 1
n = int(input("Enter number to delete: "))
items.pop(n)
print(*items, sep = ", ")   

#Delete by input 2
n = input("Enter thing to delete: ")
items.remove(n)
print(*items, sep = ", ")