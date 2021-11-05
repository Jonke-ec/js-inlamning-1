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

const year = document.getElementById("year")
const errorYear = document.getElementById("error-year")
const month = document.getElementById("month")
const errorMonth = document.getElementById("error-month")
const day = document.getElementById("day")
const errorDay = document.getElementById("error-day")

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

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";
      return false;
    } else {

    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    return document.getElementById("result").innerHTML =
        "Age is: " + age + " years. ";
    }  
}  

/*
function validateAge(year) {
    const userInput = document.getElementById("year").value;
    const dob = new Date(userInput);

    if(userInput==null || userInput=='') {
        document.getElementById("error-year").innerText = "Välj Datum";
        return false;
    }
    else {
        var month_diff = Date.now() - dob.getTime();

        var age_dt = new Date(month_diff);

        var year = age_dt.getUTCFullYear();

        var age = Math.abs(year - 1900);

        return document.getElementById("error-year").innerText =
            "Age is: " + age + " years. ";
    }
}
*/

year.addEventListener("mouseup", function(event) {
    ageCalculator(event, "År")
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