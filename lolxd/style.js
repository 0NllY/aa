function showName(){
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    
    let tekst = document.getElementById("wynik");
    tekst.innerHTML = `witaj, ${imie} ${nazwisko}`;
    
}
    let liczba_elementow = 0;

 

function addToList(){
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;

    let element = document.createElement("li");
    element.innerHTML = `${imie} ${nazwisko}, ID: ${liczba_elementow}`;
    element.id = `osoba${liczba_elementow}`;
    
    let text = document.createElement("span");
    tekst.innerHTML = `${imie} ${nazwisko}, ID: ${id_osoba}`;

let DelateBtn = document.createElement("button");
DelateBtn.innerHTML = `usun`;

let editBtn = document.createElement("button");
editBtn.innerHTML = `edytuj`;
let imie_tmp = prompt("podaj imie");
let nazwisko_tmp = prompt("podaj nazwisko");


deleteBtn.addEventListener("click", function(){
lista.removeChild(element);
}
)


    liczba_elementow++;

    let lista = document.getElementById("lista");
    lista.appendChild(element); 
  }
function deleteFromList(){
    const id_number = document.getElementById("id_number").value;
    let lista = document.getElementById("lista");

    let DelateBtn = document.createElement("button");


}

document.getElementById("przycisk").addEventListener('click', () => showName());
document.getElementById("przycisk_dodaj").addEventListener('click', () => addToList(   ));
document.getElementById("nazwisko").addEventListener("keyup", function(e){
    if(e.key === "enter"){
        e.preventDefault();
        showName();
    }

})








let przycisk_edytuj = document.createElement("button");
przycisk_edytuj.innerText = "edytuj";
przycisk_edytuj.addEventListener("click",function(){
    let imie_tmp = prompt("podaj nowe imię");
    let nazwisko_tmp = prompt("podaj nowe nazwisko");

    tekst.innerHTML = <b>${imie_tmp} ${nazwisko_tmp}</b> |ID: <i></i>

});

element




























