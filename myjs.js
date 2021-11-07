function getData() {
    let allMsg = [];
    let first_name = document.contactMeForm.firstname.value;
    let last_name = document.contactMeForm.lastname.value;
    let email = document.contactMeForm.email.value;
    let message = document.contactMeForm.msg.value;
    allMsg.push(first_name);
    allMsg.push(last_name);
    allMsg.push(email);
    allMsg.push(message);
    let space = `\u00A0\u00A0\u00A0\u00A0`;
    let stringTemplate = `First Name:  ${first_name}${space}Last Name:  ${last_name}${space}Email:  ${email}${space}Message:  ${message}${space}`;
    return stringTemplate;
}

function preview() {
    let data = getData();
    let previewMsg = document.getElementById("previewMsg");

    previewMsg.innerHTML = `${data}`;
    document.contactMeForm.reset();
}