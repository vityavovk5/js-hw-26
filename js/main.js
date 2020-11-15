 //task 1
function yearOf(){         
    var inputReques = document.getElementById('yearOfBirth');
    var year = Number(inputReques.value);
if (Number.isInteger (year)) 
{
    if (year < 0 || year > 100) {
        document.getElementById("yearAnswer").innerHTML = "Столько не живут";     
    } else {
        if (0 <= year && year <= 2) {
            document.getElementById("yearAnswer").innerHTML = "Ты еще ребенок";
        }
        else if (3 <= year && year <= 18) {
                document.getElementById("yearAnswer").innerHTML = "Ты уже подросток";
        }
        else if (18 <= year && year <= 60) {
                document.getElementById("yearAnswer").innerHTML = "Привет взрослый дядя";
        }
        else if (60 <= year && year <= 100) {
                document.getElementById("yearAnswer").innerHTML = "Ну и что то персионер";
        }
       
    }
} else {
    document.getElementById("yearAnswer").innerHTML = "введице циферки!!!";
}
}

 //task 2
function getNumber(){ 
    var numberPrint = Number(document.getElementById('inputNumber').value);
     if (Number.isInteger (numberPrint)) {
        if (0 <= numberPrint && numberPrint <= 9) {
            switch (numberPrint) {
                case 0:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак ")"`;
                  break;
                case 1:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "!"`;
                  break;
                case 2:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "@"`;
                  break;
                  case 3:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "#"`;
                  break;
                  case 4:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "$"`;
                  break;
                  case 5:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "%"`;
                  break;
                  case 6:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "^"`;
                  break;
                  case 7:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "&"`;
                  break;
                  case 8:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "*"`;
                  break;
                  case 9:
                    document.getElementById("symbolAnswer").innerHTML = `лови знак "("`;
                  break;
                default:
                    document.getElementById("symbolAnswer").innerHTML = `чот я запутался давай что то другое вводи`;
              }
        } else {
            document.getElementById("symbolAnswer").innerHTML = "дядь ну от 0 до 9";
        }
     }
     else {
        document.getElementById("symbolAnswer").innerHTML = "ну прошу же циферки введи";
    }
}
 
 //task 3
 function getThree(){ 
    var saveThree = Number(document.getElementById('threeNumbers').value);
    var number1 = parseInt(saveThree / 100);
    var number2 = parseInt(saveThree / 10) % 10;
    var number3 = saveThree % 10;
    if (Number.isInteger (saveThree)) {
        if ((99 < saveThree && saveThree < 1000)) {   
            if (number1 === number2 || number2 === number3 || number1 === number3) {
                document.getElementById("threeNumbersAnswer").innerHTML = "Есть одинаковый циферки!";
            } else {
        document.getElementById("threeNumbersAnswer").innerHTML = "Нету одинаковый циферок(";
    }
        } else {
        document.getElementById("threeNumbersAnswer").innerHTML = "только 3 циферки типа 123 шаришь?";
    }
    } else {
        document.getElementById("threeNumbersAnswer").innerHTML = "дядь ну циферки только";
    }
 }

 //task 4
 function getYear(){ 
    var dataYear = Number(document.getElementById('onlyYear').value); 
    if (Number.isInteger (dataYear)) {
        if ( dataYear > -1) {
            if(dataYear % 4 == 0 && dataYear % 100 != 0 || dataYear %400 == 0) {
                document.getElementById("answerYear").innerHTML = "Ура високосный!";
            }   else {
                document.getElementById("answerYear").innerHTML = "Неа не високосный(";
            }

        } else {
            document.getElementById("answerYear").innerHTML = "давай только без отрицательный циферок ок?";
        }
    } else {
        document.getElementById("answerYear").innerHTML = "хочу только циферками";
    }
 }

 //task 6
 function getUsd(){ 
    var quantity = Number(document.getElementById('quantityUsd').value); 
    var currencyToChange = (document.getElementById('currency').value);
    rateUSDtoEUR = 0.84;
    rateUSDtoUAH = 28.13;
    rateUSDtoAZN = 1.7;

    if (Number.isInteger (quantity)) {
        if (quantity > -1){
            switch (currencyToChange) {
                case "EUR":
                    let resultEUR = quantity * rateUSDtoEUR;
                    document.getElementById("answerUsd").innerHTML = `получается ${resultEUR}€`;
                  break;
                case "UAH":
                    let resultUAH = quantity * rateUSDtoUAH;
                    document.getElementById("answerUsd").innerHTML = `получается ${resultUAH}₴`;
                  break;
                case "AZN":
                    let resultAZN = quantity * rateUSDtoAZN;
                    document.getElementById("answerUsd").innerHTML = `получается ${resultAZN}₼`;
                  break;
                 
                default:
                    document.getElementById("answerUsd").innerHTML = `выбери валюту там выше ↑`;
              }
        }   else {
            document.getElementById("answerUsd").innerHTML = "еще и должен остался)";
        }
    } else {
        document.getElementById("answerUsd").innerHTML = "дядь буковки не переведешь в бабосики";
    }
    
 }