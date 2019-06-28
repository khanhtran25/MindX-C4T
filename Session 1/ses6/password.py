while True :    
    m = input("Enter Password: ")
    # 1234  tra ve True
    # asjdk, sadhj134 tra ve False
    if m.isdigit() == False and len(m) >= 8:
        print("Welcome!")
        break
        