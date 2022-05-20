// Your code here

function greet() {
    var nameOfUser = prompt('What is your name?')
    alert("Hello " + nameOfUser)
    var ageOfUser = parseInt(prompt('How old are you?'))
    var birthDay = confirm('Have you had your birthday yet?')

    var birthDate = new Date()
    console.log(birthDate.getFullYear())

    var yesBirth = birthDate.getFullYear() - ageOfUser
    var noBirth = birthDate.getFullYear() - ageOfUser + 1

    if (birthDay == false) {
        alert(noBirth)
    } else {
        alert(yesBirth)
    }
    
    
}