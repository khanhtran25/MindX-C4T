m=int(input("month: "))

if m < 4:
    print("spring")
elif m < 7:
    print("summer")
elif m < 10:
    print("fall")
else:
    print("winter")