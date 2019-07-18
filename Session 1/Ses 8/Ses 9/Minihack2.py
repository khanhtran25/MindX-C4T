R = "Red"
B = "Blue"
T = "Teal"
items = [R, B, T]

a = int(input("Enter color number: "))
print("Color at position",a,":",items[a-1])

print("Current Color List:")
for i,item in enumerate(items):
    print(i+1,".",item)

b = int(input("Enter color num to delete: "))
items.pop(b-1)
print("New Color List:")
for i,item in enumerate(items):
    print(i+1,".",item)

c = input("Enter color to delete: ")
items.remove(c)
print("New Color List:")
for i,item in enumerate(items):
    print(i+1,".",item)

R = "Red"
B = "Blue"
T = "Teal"
items = [R, B, T]

from turtle import *
shape("turtle")
speed(-1)
for i in range(len(items)):
    color(items[i])
    forward(100)




mainloop()