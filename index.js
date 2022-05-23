// Your code here

function greet() {
    var nameOfUser = prompt('What is your name?')
    alert("Hello " + nameOfUser)
    if (!nameOfUser) {
        return;
    }

    var ageOfUser = parseInt(prompt('How old are you?'))
    if (!ageOfUser) {
        return;
    }
    
    var birthDay = confirm('Have you had your birthday yet?')
    console.log(typeof birthDay)

    var birthDate = new Date()

    var yesBirth = birthDate.getFullYear() - ageOfUser
    
    var noBirth = birthDate.getFullYear() - ageOfUser - 1

    if (birthDay === false) {
        alert("Your birthday has NOT passed, you were born " + noBirth)
    } else {
        alert("Your birthday has passed, you were born " + yesBirth)
    }
    
    
}