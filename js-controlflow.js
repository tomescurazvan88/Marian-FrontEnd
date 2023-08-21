// Prompt pentru introducerea capacității cilindrice
var capacitateCilindrica = parseFloat(prompt("Introduceți capacitatea cilindrică (în cm3):"));

// Prompt pentru selectarea tipului vehiculului
var tipVehicul = prompt("Introduceți tipul vehiculului (auto sau motocicleta):");

// Funcția pentru calculul impozitului pentru autoturisme
function calculeazaImpozitAuto(capacitateCilindrica) {
    if (capacitateCilindrica <= 1600) {
        return 100;
    } else if (capacitateCilindrica <= 2000) {
        return 200;
    } else {
        return 300;
    }
}

// Funcția pentru calculul impozitului pentru motociclete
function calculeazaImpozitMotocicleta(capacitateCilindrica) {
    if (capacitateCilindrica <= 600) {
        return 50;
    } else {
        return 100;
    }
}

var impozit = 0;

// Calculează impozitul în funcție de tipul vehiculului
if (tipVehicul === "auto") {
    impozit = calculeazaImpozitAuto(capacitateCilindrica);
} else if (tipVehicul === "motocicleta") {
    impozit = calculeazaImpozitMotocicleta(capacitateCilindrica);
} else {
    console.log("Tipul vehiculului introdus nu este valid.");
}

// Afișează valoarea impozitului
if (impozit > 0) {
    alert("Impozitul pentru " + tipVehicul + " cu capacitatea cilindrică de " + capacitateCilindrica + " cm³ este: " + impozit + " lei.");
} else {
    console.log("Nu s-a putut calcula impozitul.");
}