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