l1 = ["ST","BD","BTL","CG","DD","HBT"]
l2 = [150300,247100,333300,266800,420900,318000]
l3 = [117.43,9.224,43.35,12.04,9.96,10.09]
p=0
for i in range(len(l1)):
    print("Mat do dan so quan",l1[i],int(l2[i])/int(l3[i]))
    
    p = p + int(l2[i])/int(l3[i])
print(p)

print("Mat do dan cu tb:",p/len(l1))