m = input("enter yr full name: ")
print(m)

n = int(input("enter a number: "))
m = (n*n)
print("square of yr number is:" ,m)

from turtle import*
a = int(input("enter a number: "))
shape ("turtle")
circle (a)

name = "khanh"
print(name.upper())

r1= range (3,13,1)
print(*r1)

n = int(input("Enter a number: "))
r2 = range (0,n)
print(*r2)

n = int(input("Enter a number: "))
r3 = range (1,n,2)
print(*r3)

from turtle import*
a = int(input("enter a number: "))
shape ("turtle")
for i in range(a):
    left(360/a)
    forward(100)

mainloop()

m = int(input())
n = int((m%2))
if n<1:
    print("even num")
else:
    print("not even num")
