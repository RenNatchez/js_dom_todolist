// select btn envoyer
let btnEnvoyer = document.querySelector('#envoyer')
// select input
let input = document.querySelector('input')
// select liste
let liste = document.querySelector('.listTaches')
// select tache
let tache = document.getElementsByTagName('li')



// taches
let addTache = () => {
    // fiche tache
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    liste.appendChild(li)
    li.setAttribute('class', 'en_cours');

    input.value = ""

    // div btn 
    let divbtn = document.createElement('div')
    li.appendChild(divbtn)

    // bouton ajouter
    let btncheck = document.createElement('button')
    btncheck.appendChild(document.createTextNode("test"))
    btncheck.innerHTML = `<i class="fas fa-clipboard-check"></i>`
    divbtn.appendChild(btncheck)

    // bouton supprimer
    let btndelete = document.createElement('button')
    btndelete.appendChild(document.createTextNode("test"))
    btndelete.innerHTML = `<i class="fas fa-trash-alt"></i>`
    divbtn.appendChild(btndelete)

    //  valider les taches
    let tacheOk = () => {
        li.classList.toggle("t_ok")
        li.classList.toggle("en_cours")
    }
    btncheck.addEventListener("click", tacheOk)

    // suprimer les taches
    let suprimer = () => {
        li.classList.add("nonefinal")
        // style et suprimer
    }
    let suprtime = () => {
        li.style.color = "red"
        li.style.border = 'none'
        setTimeout(suprimer, 800);
    }
    btndelete.addEventListener("click", suprtime)
}

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
    tab.splice(0,1)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == 'en_cours') {
        } else {
            element.classList.add("none")
        }
    });
}
btnEnCours.addEventListener('click', triEnCours)

// fini
let triAll = () => {
    let tabNode = liste.children
    var tab = Array.from(tabNode)
    tab.splice(0,1)
    tab.forEach(element => {
        element.classList.remove("none")
    });
}
btnAll.addEventListener('click', triAll)

let triFini = () => {
    let tabNode = liste.children
    var tab = Array.from(tabNode)
    tab.splice(0,1)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == 't_ok') {
        } else {
            element.classList.add("none")
        }
    });
}
btnFini.addEventListener('click', triFini)
