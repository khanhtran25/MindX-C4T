#1
mah_thangs = input("Enter ur thangsss: ")
x = mah_thangs.split(",") 
for i in range(len(x)):
    print(x[i])

#2
import random
bun = input("Enter a word: ")
characters = list(bun)
print("Jumble Word: ")
random.shuffle(characters)
characters = ''.join(characters)
x = list(characters)
for i in range(len(x)):
    print(x[i])

#3
print(characters)
while True:
    a = input("Can u guess the original word? ")
    if a == bun:
        print("Correct! Well done :D")
        break
    else:
        print("Try again!")

