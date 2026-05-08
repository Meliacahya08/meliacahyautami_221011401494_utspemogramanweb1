<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Modern</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <div class="calculator" id="calculator">

        <div class="top-menu">
            <button id="themeBtn">🌙</button>
        </div>

        <div class="display">
            <input type="text" id="result" placeholder="0" readonly>
        </div>

        <div class="buttons">

    <div class="buttons">

    <!-- BARIS 1 -->
    <button onclick="clearDisplay()" class="operator">AC</button>
    <button onclick="deleteLast()" class="operator">⌫</button>
    <button onclick="appendValue('%')" class="operator">%</button>
    <button onclick="appendValue('/')" class="operator">÷</button>

    <!-- BARIS 2 -->
    <button onclick="appendValue('7')">7</button>
    <button onclick="appendValue('8')">8</button>
    <button onclick="appendValue('9')">9</button>
    <button onclick="appendValue('*')" class="operator">×</button>

    <!-- BARIS 3 -->
    <button onclick="appendValue('4')">4</button>
    <button onclick="appendValue('5')">5</button>
    <button onclick="appendValue('6')">6</button>
    <button onclick="appendValue('-')" class="operator">−</button>

    <!-- BARIS 4 -->
    <button onclick="appendValue('1')">1</button>
    <button onclick="appendValue('2')">2</button>
    <button onclick="appendValue('3')">3</button>
    <button onclick="appendValue('+')" class="operator">+</button>

    <!-- BARIS 5 -->
    <button onclick="appendValue('0')" class="zero">0</button>
    <button onclick="appendValue('.')">.</button>
    <button onclick="calculate()" class="equal">=</button>

</div>
     
    </div>

</div>

<script src="script.js"></script>
</body>
</html>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

/* BODY */
body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#ffb347,#ff69b4);
    transition:0.3s;
}

/* KALKULATOR */
.calculator{
    width:360px;
    background:#f7f7f7;
    padding:25px;
    border-radius:25px;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

/* TOP MENU */
.top-menu{
    display:flex;
    justify-content:flex-end;
    margin-bottom:30px;
}

.top-menu button{
    width:120px;
    height:60px;
    border:none;
    border-radius:30px;
    background:#ececec;
    font-size:22px;
    cursor:pointer;
}

/* DISPLAY */
.display{
    margin-bottom:30px;
}

.display input{
    width:100%;
    height:60px;
    border:none;
    outline:none;
    border-radius:20px;
    background:#ececec;
    padding:30px;
    text-align:right;
    font-size:42px;
    color:#555;
}

/* BUTTON GRID */
.buttons{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:30px;
}

/* SEMUA BUTTON */
.buttons button{
    width:120%;
    height:60px;
    border:none;
    border-radius:20px;
    background:#ececec;
    font-size:28px;
    cursor:pointer;
    transition:0.2s;
}


/* HOVER */
.buttons button:hover{
    transform:scale(1.05);
}

/* OPERATOR */
.operator{
    background:#ffd166 !important;
}

/* HASIL */
.equal{
    background:#ff5ca8 !important;
    color:white;
}

/* ANGKA 0 */
.zero{
    grid-column:span 2;
}

/* ================= DARK MODE ================= */

.dark{
    background:linear-gradient(135deg,#111,#444);
}

.dark .calculator{
    background:#222;
}

.dark .display input{
    background:#333;
    color:white;
}

.dark .buttons button{
    background:#444;
    color:white;
}

.dark .operator{
    background:#666 !important;
    color:white;
}

.dark .equal{
    background:#ff5ca8 !important;
}

/* RESPONSIVE */
@media(max-width:500px){

    .calculator{
        width:95%;
        padding:20px;
    }

    .buttons button{
        height:120px;
        font-size:24px;
    }

    .display input{
        height:75px;
        font-size:32px;
    }
}

const result = document.getElementById("result");

/* TAMBAH ANGKA / OPERATOR */
function appendValue(value){
    result.value += value;
}

/* HAPUS SEMUA */
function clearDisplay(){
    result.value = "";
}

/* HAPUS SATU */
function deleteLast(){
    result.value = result.value.slice(0,-1);
}

/* HITUNG */
function calculate(){

    if(result.value == ""){
        alert("Input kosong!");
        return;
    }

    try{
        result.value = eval(result.value);
    }
    catch{
        alert("Input salah!");
    }
}

/* DARK MODE */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});
