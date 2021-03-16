const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

const phoneRegex = /^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/;

document.getElementById('email').addEventListener('input', () => {
    const input = document.getElementById('email').value
    if (emailRegex.test(input)) {
        document.getElementById('emailresult').innerHTML = "<span style=\"color: #44DDBF;\">adresse valide</span>"
    } else {
        document.getElementById('emailresult').innerHTML = "<span style=\"color: #C71717;\">adresse invalide</span>"
    }
})


document.getElementById('phone').addEventListener('input', () => {
    const input = document.getElementById('phone').value
    if (phoneRegex.test(input)) {
        document.getElementById('phoneresult').innerHTML = "<span style=\"color: #44DDBF;\">numéro valide</span>"
    } else {
        document.getElementById('phoneresult').innerHTML = "<span style=\"color: #C71717;\">numéro invalide</span>"
    }
})