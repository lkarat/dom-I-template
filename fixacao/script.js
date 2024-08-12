let a = document.getElementById("paragrafo")
let b = document.getElementById("texto")
console.log(a.innerHTML);

function alterarInputACadaCaracter() {

    console.log(b.value);

}
function substituirValor() {
    a.innerHTML = b.value
    b.value=""
}





