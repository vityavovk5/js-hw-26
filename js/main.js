function yearOf(){
    var inputReques = document.getElementById('yearOfBirth');
    var year = Number(inputReques.value);


    console.log(year);
if (Number.isInteger (year)) {
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
    // document.getElementById("yearAnswer").innerHTML = year;
} else {
    document.getElementById("yearAnswer").innerHTML = "введице циферки!!!";
 
}

    }