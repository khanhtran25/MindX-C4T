user = input("name: ")
password = input("pass: ")
email = input("Email: ")
n = "@gmail.com"
if n in email and len(password) >=8:
    print("reenter password: ")
    re = input()
    if password == re:
        print("ok")
    else: 
        print("reenter pass: ")
else:
    print("enter again: ")

