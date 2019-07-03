# item1 = "Com"
# item2 = "chao"
# item3 = "Pho"
# item4 = "Bun"

#Create
items = [ 'com', 'pho', 'bun']
print(items)
new_item = input("Enter new item: ")
items.append(new_item)
print(items)

#Read
print(*items, sep = ", ")
i = int(input("Enter food number: "))
print("Index",i)
print(items[i])

#Update
n = int(input("Enter food number: "))
update = input("Update food menu: ")
items[n] = update 
print(items)

#Delete

#1. Index-based
n = int(input("Enter food number to delete: "))
items.pop(n)
print(items)

#2. Value-based
new_item = input("Enter food name to delete: ")
items.remove(new_item)
print(items)