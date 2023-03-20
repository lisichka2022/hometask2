'use strict'

function getAge(age) {
  if (isNaN(age)) {
    return "Ошибка";
  } 
    let lastNumber = age % 10;
    let year='';
  
    if (age === 0) {
      year = "лет";
    }
    else if (lastNumber >= 2 && lastNumber <= 4){
      year = "года"; 
    } 
     else if (lastNumber === 1 && age !== 11) {
      year = "год";
    } else {
      year = "лет";
    }
  
    return `Вам ${age} ${year}`;
  }


let inputAge = prompt("Input your age");
alert(getAge(inputAge));