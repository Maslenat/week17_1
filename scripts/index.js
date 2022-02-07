const outputName = () => {

    let first = document.getElementById('first').value;

    first = first.trim().split(/\s+/);

    let massivstr = [];

    massivstr = [...first];

    let div = document.getElementById('outputname');

    if (first == 0) {

        div.innerHTML = '';
        return;

    }

    if (massivstr.length !== 3) {
        div.innerHTML = 'Введите три слова';
        return;
    } else {
        div.innerHTML = '';

        let name = document.createElement("p");
        name.innerHTML = `Фамилия: ${massivstr[0].charAt(0).toUpperCase() + massivstr[0].slice(1)}`;

        let secondname = document.createElement("p");
        secondname.innerHTML = `Имя: ${massivstr[1].charAt(0).toUpperCase() + massivstr[1].slice(1)}`;

        let lastname = document.createElement("p");
        lastname.innerHTML = `Отчество: ${massivstr[2].charAt(0).toUpperCase() + massivstr[2].slice(1)}`;

        div.appendChild(name);
        div.appendChild(secondname);
        div.appendChild(lastname);
    }




}
document.getElementById('btn').onclick = outputName;