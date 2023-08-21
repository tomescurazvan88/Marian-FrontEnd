function calculMedieAritmetica(array) {
    var sum = 0;
    var numCount = 0;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            numCount++;
        }
    }

    if (numCount === 0) {
        return 0; // Împărțirea la zero nu este definită, deci returnăm 0 în acest caz
    }

    return sum / numCount;
}

var numere = [10, 20, 30, "abc", true, 40];
var medie = calculMedieAritmetica(numere);
console.log("Media aritmetică a numerelor din array este:", medie);





function calculSumaNumere(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
    }

    return sum;
}

var valoriDiverse = [10, 20, "abc", true, 30, false, 40];
var sumaNumere = calculSumaNumere(valoriDiverse);
console.log("Suma numerelor din array este:", sumaNumere);





function generateFibonacci(limit) {
    var fibonacci = [0, 1];

    for (var i = 2; i < limit; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

var primele20Fibonacci = generateFibonacci(20);
console.log("Primele 20 numere din șirul lui Fibonacci:", primele20Fibonacci);