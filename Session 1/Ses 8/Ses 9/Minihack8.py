hs = [43,13,133,69]

hs.sort(reverse = True)

for i,point in enumerate(hs):
    print(i+1,".",point)

while True:
    nhs = int(input("Enter new high score: "))
    hs.append(nhs)
    hs.sort(reverse = True)

    for i in range(5):
        print(i+1,".",hs[i])