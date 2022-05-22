// Your code here

function greet() {
    var nameOfUser = prompt('What is your name?')
    alert("Hello " + nameOfUser)
    if (nameOfUser === null) {
        return;
    }
    

    var ageOfUser = parseInt(prompt('How old are you?'))
    var birthDay = confirm('Have you had your birthday yet?')

    var birthDate = new Date()
    // console.log(birthDate.getFullYear())

    var yesBirth = birthDate.getFullYear() - ageOfUser
    var noBirth = birthDate.getFullYear() - ageOfUser + 1

    if (birthDay === false) {
        alert("Your birth year has NOT yet passed, you were born " + noBirth)
    } else {
        alert("Your birth year has passed, you were born " + yesBirth)
    }
    
    
}