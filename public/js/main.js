import {
    addTache,
    btnEnvoyer,
    input,
    liste
} from "./méthodes.js"
// ajout au enter
let addTacheEnter = (event) => {
    if (event.which === 13) {
        addTache()
    }
}
input.addEventListener('keypress', addTacheEnter)

// ajout au btn
let addtachebtn = () => {
    addTache()
}
btnEnvoyer.addEventListener('click', addtachebtn)


// select btn en cours
let btnEnCours = document.querySelectorAll('.btn_family')[0]
// select btn fini
let btnFini = document.querySelectorAll('.btn_family')[1]
// select btn all
let btnAll = document.querySelectorAll('.btn_family')[2]

// en cours
let triEnCours = () => {
    let tabNode = liste.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == 'en_cours') {} else {
            element.classList.add("none")
        }
    });
}
btnEnCours.addEventListener('click', triEnCours)

// fini
let triAll = () => {
    let tabNode = liste.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
    });
}
btnAll.addEventListener('click', triAll)

let triFini = () => {
    let tabNode = liste.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == 't_ok') {} else {
            element.classList.add("none")
        }
    });
}
btnFini.addEventListener('click', triFini)


// dark mode
let darkMode = document.querySelector(".darkmode")
darkMode.innerHTML = 'jour'
let darkmodeapp = () => {

    if (darkMode.innerHTML == 'jour') {
        darkMode.innerHTML = 'nuit'
        var html = document.querySelector('html')
        html.style.filter = "invert(100%)"
        html.style.backgroundColor = 'black'
        
    } else if (darkMode.innerHTML == 'nuit') {
        darkMode.innerHTML = 'jour'
        var html = document.querySelector('html')
        html.style.filter = "invert(0%)"
        html.style.backgroundColor = 'white'
    }
}
darkMode.addEventListener('click', darkmodeapp)