window.addEventListener("load", init);
let lepes = 0;
function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

function init(elem) {
    let txt = "";
    for (let index = 0; index < 9; index++) {
        txt += "<div id='" + index + "'></div>";
    }

    ID("kovLepes").innerHTML = ID("nev1").value
    ID("tarolo").innerHTML = txt;

    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", kattintas)

    }
}

function kattintas() {
    let aktIndex = (event.target.id);
    if (lepes % 2 == 0) {
        ID(aktIndex).innerHTML = "X"
        ID(aktIndex).style.backgroundColor = "lightblue";
        ID(aktIndex).removeEventListener("click", kattintas)
        ID("kovLepes").innerHTML = "Következő: "+ID("nev2").value
    } else {
        ID(aktIndex).innerHTML = "O"
        ID(aktIndex).style.backgroundColor = "lightgreen";
        ID(aktIndex).removeEventListener("click", kattintas)
        ID("kovLepes").innerHTML = "Következő: "+ID("nev1").value
        }
    lepes++;
}    