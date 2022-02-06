const outputName = () => {

    let first = document.getElementById('first').value;

    first = first.trim().split(/\s+/);

    let massivstr = [];

    massivstr = [...first];

    let div =document.getElementById('outputname');
    
    if(first==0){

        div.innerHTML='';
        return;

      }

    else{ 

    let name = document.createElement("p");
    name.innerHTML = `Фамилия: ${massivstr[0].charAt(0).toUpperCase() + massivstr[0].slice(1)}`;
  
    let secondname = document.createElement("p");
    secondname.innerHTML = `Имя: ${massivstr[1].charAt(0).toUpperCase() + massivstr[1].slice(1)}`;
 
    let lastname = document.createElement("p");
    lastname.innerHTML = `Отчество: ${massivstr[2].charAt(0).toUpperCase() + massivstr[2].slice(1)}`;

    div.appendChild(secondname);
    div.appendChild(name);
    div.appendChild(lastname); }


    /* for (const mas of massivstr) {

        let p = document.createElement("p");
        p.innerHTML = mas.charAt(0).toUpperCase() + mas.slice(1);
        div.appendChild(p);

    } */

}

document.getElementById('first').onchange = outputName;