from random import randint

today=["Moday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
day_of_week=today[randint(0,6)]
if day_of_week=="Monday" or day_of_week=="Tuesday" or day_of_week=="Wednesday" or day_of_week=="Thursday":
    print("Keep on working brother")
elif day_of_week=="Firday":
   print("Almost there :)")
else:
    print("WEEKEND!!")


