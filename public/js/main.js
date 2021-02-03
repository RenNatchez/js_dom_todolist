// select btn envoyer
let btnEnvoyer = document.querySelector('#envoyer')
// select input
let input = document.querySelector('input')
// select liste
let liste = document.querySelector('.listTaches')
// select tache
let li = document.querySelectorAll('li')

// ajout des taches
    // ajout au click
    let addTache = () => {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        liste.appendChild(li)
        input.value = ""
    }
    btnEnvoyer.addEventListener("click", addTache)

    // ajout au enter
    let addTacheEnter = (event) => {
        if (event.which === 13) {
            addTache()
        }
    }
    input.addEventListener('keypress',addTacheEnter)



//valider la taches
let tacheOk = () => {
    alert('test')
}
li.addEventListener("mouseover", tacheOk)


let btnSup = document.createElement('button')
btnSup.appendChild(document.createTextNode("lol"))
li.appendChild(btnSup)
btnSup.addEventListener("click", tacheOk)
let suprimer = () => {
    li.classList.add("none")
}