// select btn envoyer
let btnEnvoyer = document.querySelector('#envoyer')
// select input
let input = document.querySelector('input')
// select liste
let liste = document.querySelector('ul')
// select tache
let tache = document.getElementsByTagName('li')

// taches
let addTache = () => {
    // fiche tache
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    liste.appendChild(li)
    li.innerHTML = `<span>${li.textContent}</span>`
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

    // bouton modif texte
    let btnmodif = document.createElement('button')
    btnmodif.appendChild(document.createTextNode("test"))
    btnmodif.innerHTML = `<i class="fas fa-pencil-alt"></i>`
    divbtn.appendChild(btnmodif)

    //  modifier les taches
    let tachemodif = () => {
        var span = li.querySelector('span')
        let x = prompt("changez le nom ?")
        span.innerHTML = x
    }
    btnmodif.addEventListener("click", tachemodif)

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










export {
    addTache,
    btnEnvoyer,
    input,
    liste,
    tache
}