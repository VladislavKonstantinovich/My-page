let firstValue;

for (let i of document.querySelectorAll('.figure')) {
    i.addEventListener('click', function screenWrite() {
        document.getElementById("screen").textContent += i.textContent;
    });
}
document.getElementById('plus').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Error!'
        }
    }
}
document.getElementById('minus').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) - parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Error!'
        }
    }
}
document.getElementById('multiply').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) * parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Error!'
        }
    }
}
document.getElementById('divide').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) / parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Error!'
        }
    }
}
document.getElementById('dot').onclick = function () {
    document.getElementById("screen").textContent += '.';
}
document.getElementById('back').onclick = function () {
    document.getElementById("screen").textContent = document.getElementById("screen").textContent.slice(0, -1);
}
document.getElementById('reset').onclick = function () {
    document.getElementById("screen").textContent = "";
}
document.getElementById("screen").onclick = function () {
    navigator.clipboard.writeText(document.getElementById("screen").textContent);
    alert('Копійовано!')
}