var selectrow=null;
var btnupdate=document.getElementById("update");
const Ajouter = document.querySelector('#Ajouter');
let table = document.querySelector(".table");
 var Titre = document.querySelector('#Titre');
    var Auteur = document.querySelector('#Auteur');
    var Prix = document.querySelector('#Prix');
    var Date = document.querySelector('#Date');
    var langue =document.querySelector("#option")
    var type = document.querySelector("input[name='owen']:checked");
Ajouter.addEventListener('click', (e) => {
    e.preventDefault();
    if (Titre.value == '' || Titre.value.length > 30) {
        Titre.style.border = "2px solid red";
    }
    else if (parseInt(Titre.value)) {
        Titre.style.border = "2px solid red";
    }
    else {
        Titre.style.border = "2px solid green";
    }

    if (Auteur.value == '' || Auteur.value.length > 30) {
        Auteur.style.border = " 2px solid red";
    }
    else if (parseInt(Auteur.value)) {
        Auteur.style.border = "2px solid red";
    }
    else {
        Auteur.style.border = "2px solid green";
    }

    if (Prix.value == '') {
        Prix.style.border = " 2px solid red";
    }
    else {
        Prix.style.border = "2px solid green";
    }
    if (Date.value == '') {
        Date.style.border = " 2px solid red";
    }
    else {
        Date.style.border = "2px solid green";
    }

});

const Ajouterr = document.getElementById('Ajouter');
Ajouter.addEventListener('click', (e) => {
    e.preventDefault();
    let type = document.querySelector("input[name='owen']:checked");
    var arr = table.rows.length;
    let row = table.insertRow(arr);
    let cell1 = row.insertCell(0).innerHTML = Titre.value;
    let cell2 = row.insertCell(1).innerHTML = Auteur.value;
    let cell3 = row.insertCell(2).innerHTML = Prix.value;
    let cell4 = row.insertCell(3).innerHTML = Date.value;
    let cell5 = row.insertCell(4).innerHTML = option.value;
    let cell6 = row.insertCell(5).innerHTML = type.value;
    let icon = row.insertCell(6).innerHTML =
        `<button type="button" value="edit" onclick="edit(this)"  ><i class="fas fa-edit"></i></button>
   <button type="button" value="delete"  ><i class="fas fa-trash"></i></button>`;
   vide();
});
table.addEventListener('click', (event) => {
    if (event.target.parentElement.value === 'delete' || event.target.value === 'delete') {
        event.target.closest('tr').remove();
    }
})


function vide(){
    document.querySelector('#Titre').value="";
    document.querySelector('#Auteur').value="";
   document.querySelector('#Prix').value="";
     document.querySelector('#Date').value="";
   document.querySelector("#option").value="";
    document.querySelector(".type").value="";

}
function edit(e){
    document.getElementById('Ajouter').style.display="none";
    document.getElementById('update').style.display="block";
    selectrow=e.parentNode.parentNode;
    Titre.value=selectrow.cells[0].innerHTML;
     Auteur.value=selectrow.cells[1].innerHTML;
     Prix.value=selectrow.cells[2].innerHTML;
     Date.value = selectrow.cells[3].innerHTML;
     langue.value =selectrow.cells[4].innerHTML;
     type.value = selectrow.cells[5].innerHTML;
   
   
}
btnupdate.addEventListener("click",function(){
document.getElementById('Ajouter').style.display="block";
    document.getElementById('update').style.display="none";
    selectrow.cells[0].innerHTML=Titre.value;
     selectrow.cells[1].innerHTML=Auteur.value;
     selectrow.cells[2].innerHTML=Prix.value;
    selectrow.cells[3].innerHTML=Date.value;
    selectrow.cells[4].innerHTML = langue.value;
      selectrow.cells[5].innerHTML=type.value;
   
   vide();
})
    

    
