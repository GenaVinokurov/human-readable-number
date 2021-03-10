module.exports = function toReadable (number) {
  let digit1 = ["zero","one","two","three", "four", "five", "six", "seven","eight","nine"]
  let digit2 = ["ten","eleven","twelve", 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  let digit3 = ["twenty","thirty", 'forty','fifty','sixty','seventy','eighty','ninety']
  let num = "" + number
  let str = ""
  if (num.length == 1){
    str = str + digit1[number]
  } else if(num.length == 2){
      if(num[0] == 1){
        str = digit2[+num[1]]
      } else {
        str = digit3[num[0] -2]
        if (num[1] != 0) {
          str= str + " " + digit1[num[1]]
        }
      }
  } else {
    str = digit1[num[0]] + " hundred"
    if (num[1] == 1 ){
      str = str + " " + digit2[num[2]]
    } else if (num[1] == 0 && num[2] !=0 ){
      str = str + " " + digit1[num[2]]
    } else if (num[1] != 0){
      str = str + " " + digit3[num[1] - 2]
      if (num[2] != 0) {
        str = str + " " + digit1[num[2]]
      }
    } 
    }
    return str
  }

