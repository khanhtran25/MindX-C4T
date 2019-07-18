hs = [43,13,133,69]
for i,point in enumerate(hs):
    print(i+1,".",point)
nhs = input("Enter new high score: ")
hs.append(nhs)
for i,point in enumerate(hs):
    print(i+1,".",point)