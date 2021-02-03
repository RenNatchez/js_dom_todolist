// select btn envoyer
let btnEnvoyer = document.querySelector('#envoyer')
// select input
let input = document.querySelector('input')
// select liste
let liste = document.querySelector('.listTaches')
// select tache
let tache = document.getElementsByTagName('li')

// ajout des taches
    let addTache = () => {

        // fiche tache
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        liste.appendChild(li)
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
        }
        btncheck.addEventListener("click", tacheOk)

        // suprimer les taches
        let suprimer = () => {
            li.classList.toggle("none")
        }
        let suprtime = () => {
            li.style.color = "red"
            li.style.border = 'none'
            setTimeout(suprimer, 500); 
        }
        btndelete.addEventListener("click", suprtime)






    }

    // ajout au enter
    let addTacheEnter = (event) => {
        if (event.which === 13) {
            addTache()
        }
    }
    input.addEventListener('keypress',addTacheEnter)

