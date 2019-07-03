#1
items = ["football", "Asphalt", "EDM", "Friends", "HIMYM" , "Kingsman"]

for i in range(len(items)):
    print(items[i])

#2
for i in range(len(items)):
    print(items[i].upper())

#3
for i, item in enumerate(items):
    print(i+1, ".", item)

#4 ?
x = "e" or "E"
if x in items :
   print(items)