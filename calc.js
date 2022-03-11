let items = [];
let message = "";

function checked() {
    for (let i = 0; i <= 6; i++) {
        if (formCalc[i].checked) {
            message += `item: ${formCalc[i].name} `;
            items.push(formCalc[i].name);
            items.push(message);

        } else {
            //console.log("no item was checked")
        }
    }
    document.getElementById("checkbox").innerHTML = items;
    console.log(items)
    return items;}