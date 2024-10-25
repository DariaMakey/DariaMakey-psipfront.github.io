function calculateExpression(x, y) {
    try {
        if (x === 0) {
            throw new Error("Деление на ноль невозможно, x не должен быть равен нулю.");
        }
        let sqrtAbsX = Math.sqrt(Math.abs(x));
        let innerExpr = y - sqrtAbsX;
        let secondPart = x - (y / x) + (x * x / 4);

        if (secondPart === 0) {
            throw new Error("Второе выражение стало нулем, что приведет к бесконечности при логарифмировании.");
        }

        let result = Math.log(Math.abs(innerExpr * secondPart));
        return result;
    } catch (error) {
        alert("Ошибка: " + error.message);
        return null;
    }
}

function displayResult() {
    let x = parseFloat(document.getElementById("inputX").value);
    let y = parseFloat(document.getElementById("inputY").value);

    let result = calculateExpression(x, y);
    if (result !== null) {
        document.getElementById("result").innerText = "Результат: " + result;
    }
}

document.getElementById("calculateButton").onclick = displayResult;
