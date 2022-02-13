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
        name.innerHTML = `Фамилия: ${massivstr[0].charAt(0).toUpperCase() + massivstr[0].slice(1).toLowerCase()}`;

        let secondname = document.createElement("p");
        secondname.innerHTML = `Имя: ${massivstr[1].charAt(0).toUpperCase() + massivstr[1].slice(1).toLowerCase()}`;

        let lastname = document.createElement("p");
        lastname.innerHTML = `Отчество: ${massivstr[2].charAt(0).toUpperCase() + massivstr[2].slice(1).toLowerCase()}`;

        div.appendChild(name);
        div.appendChild(secondname);
        div.appendChild(lastname);
    }




}
document.getElementById('btn').onclick = outputName;


//очистка блока при удалении значений из инпута  без нажатия на кнопку, если перед этим было введено неверное количество слов
const change = () => {

    let value = document.getElementById('first').value;
    let div = document.getElementById('outputname');
    if (value == 0) {
        div.innerHTML = '';
        return;
    }

}
document.getElementById('first').onchange = change;