m = input("enter number: ")
n = int(m)
# 1234
loop_count = 0
while n > 0:
    n =(n//10)
    loop_count += 1
print(loop_count)