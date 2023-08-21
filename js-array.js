// 1. Declarare și inițializare array-ul otherValues
var otherValues = [42, "Hello", true, 3.14];

// 2. Push la otherValues array în initialValues array
var initialValues = [10, "World"];
initialValues.push(otherValues);

// 3. Calculul operatiilor aritmetice pe valorile numerice din initialValues array
for (var i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
        initialValues[i] += 2;
    }
}

// 4. Modificarea valorilor din initialValues array cu noile valori calculate
// (nu sunt adăugate ca valori noi în array)
for (var i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
        initialValues[i] += 2;
    }
}

// 5. Concatenarea valorilor de tip string cu "happy coding"
for (var i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
        initialValues[i] += " happy coding";
    }
}

// 6. Inversarea valorilor booleene folosind operatorul "!"
for (var i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
        initialValues[i] = !initialValues[i];
    }
}

// Afisarea rezultatului final
console.log(initialValues);