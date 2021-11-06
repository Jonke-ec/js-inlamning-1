const regForm = document.getElementById("regForm")
const firstName = document.getElementById("firstName")
const errorFirstName = document.getElementById("error-firstName")
const lastName = document.getElementById("lastName")
const errorLastName = document.getElementById("error-lastName")
const gata = document.getElementById("gata")
const errorGata = document.getElementById("error-gata")
const ort = document.getElementById("ort")
const errorOrt = document.getElementById("error-ort")
const postnummer = document.getElementById("postnummer")
const errorPostnummer = document.getElementById("error-postnummer")
const email = document.getElementById("email")
const errorEmail = document.getElementById("error-email")

const birthday = document.getElementById("birthday")
const errorbirthday = document.getElementById("error-birthday")

function validateLength(event, name, minLength = 2) {
    const error = document.getElementById(`error-${event.target.id}`)

    if(event.target.value === "")
        error.innerText = `Du måste ange ${name.toLowerCase()}.`
    else {
        if(event.target.value.length < minLength)
            error.innerText = `${name} måste bestå av minst ${minLength} tecken.`
        else
            error.innerText = ""
    }
}

function validateZipLength(event, name, minLength = 5) {
    const error = document.getElementById(`error-${event.target.id}`)

    if(event.target.value === "")
        error.innerText = `Du måste ange ${name.toLowerCase()}.`
    else {
        if(event.target.value.length < minLength)
            error.innerText = `${name} måste bestå av minst ${minLength} tecken.`
        else
            if(event.target.value.length > minLength)
                error.innerText = `${name} kan bara bestå av högst ${minLength} tecken.`
            else
                error.innerText = ""
    }
}

function validatePassLength(event, name, minLength = 8) {
    const error = document.getElementById(`error-${event.target.id}`)

    if(event.target.value === "")
        error.innerText = `Du måste ange ${name.toLowerCase()}.`
    else {
        if(event.target.value.length < minLength)
            error.innerText = `${name} måste bestå av minst ${minLength} tecken.`
        else
            error.innerText = ""
    }
}


function comparePassword(password, confirmPassword, name) {
    const error = document.getElementById(`error-${confirmPassword.target.id}`)

    if(password !== confirmPassword.target.value)
        error.innerText = `${name} matchar inte.`
    else
        error.innerText = ""
}

function validateEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(email.value))
        document.getElementById(`error-${email.id}`).innerText = `Måste vara en giltig e-postadress.`
    else
        document.getElementById(`error-${email.id}`).innerText = ``
}

function validateBirth(birthday) {
    const regBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    if (!regBirthdate.test(birthday))
        return false
    
    return true
}

function getBirthdate(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        return false
    }
    return true;
    
}

birthday.addEventListener("keyup", function(event) {
    console.log('Över 18 = ' + getBirthdate(event.target.value))
})

firstName.addEventListener("keyup", function(event) {
    validateLength(event, "Förnamn")
})

lastName.addEventListener("keyup", function(event) {
    validateLength(event, "Efternamn")
})

gata.addEventListener("keyup", function(event) {
    validateLength(event, "Gata")
})

ort.addEventListener("keyup", function(event) {
    validateLength(event, "Ort")
})

postnummer.addEventListener("keyup", function(event) {
    validateZipLength(event, "Postnummer")
})

email.addEventListener("keyup", function(event) {
    validateEmail(email, "E-postadress")
})

password.addEventListener("keyup", function(event) {
    validatePassLength(event, "Lösenord")
})

confirmPassword.addEventListener("keyup", function(event) {
    comparePassword(document.getElementById("password").value, event, "Lösenordet")
})