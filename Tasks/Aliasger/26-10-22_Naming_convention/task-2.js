
// Eaxmple 1
dayNumber = new Date().getDay()
console.log(dayNumber)

// can also be ritten as "switch(new Date().getDay())""

switch (dayNumber) {
  case 0:
        day = "Sunday";
        console.log(day)
    break;
  case 1:
        day = "Monday";
        console.log(day)
    break;
  case 2:
        day = "Tuesday";
        console.log(day)
    break;
  case 3:
        day = "Wednesday";
        console.log(day)
    break;
  case 4:
        day = "Thursday";
        console.log(day)
    break;
  case 5:
        day = "Friday";
        console.log(day)
    break;
  case 6:
        day = "Saturday";
        console.log(day)
}

// Example 2

marks= 65

switch (true) {
  case (marks>90):
      console.log("well done you scored great, you have gotten 'A' gread")
      break
  case (marks<90 && marks>70):
      console.log("you are passed, you have gotten 'B' grade")
      break
  case (marks<70 && marks>40):
    console.log("you can do better, you have gotten 'C' grade")
    break
  case (marks <= 40):
    console.log("Try your best next time, you have gotten 'F' grade ")
    break
  default:
    console.log("The program is running")
}