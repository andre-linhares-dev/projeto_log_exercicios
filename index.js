let listaAtividades = Array()

const atividadesJson = localStorage.getItem("logExercicios.atividades")

if (atividadesJson) {
    listaAtividades = JSON.parse(atividadesJson)
    addElementToDom(listaAtividades)
}

console.log(atividadesJson)

formulario.addEventListener('submit', function (evt) {
    evt.preventDefault()
    const data = document.getElementById("inputDate").value
    const atividade = document.getElementById("inputAtividade").value
    const tempo = document.getElementById("tempoTotal").value
    listaAtividades.push({
        data,
        atividade,
        tempo
    })
    console.log(listaAtividades)
    localStorage.setItem("logExercicios.atividades", JSON.stringify(listaAtividades))

    addElementToDom()
    formulario.reset()
})

function addElementToDom() {

    // let tabela = document.getElementById("linhaTable")

    // let linha = document.createElement('tr')
    //     let data = document.createElement('td')
    //     let atividade = document.createElement('td')
    //     let tempo = document.createElement('td')

    //     linha.appendChild(data)
    //     linha.appendChild(atividade)
    //     linha.appendChild(tempo)
    //     tabela.appendChild(linha)

    //     data.innerHTML = listaAtividades.data
    //     atividade.innerHTML = listaAtividades.atividade
    //     tempo.innerHTML = listaAtividades.tempo

    let tasksList = document.getElementById("linhaTable")
    tasksList.innerHTML = ``
    listaAtividades.map((element, key) => tasksList.innerHTML +=
        `<tr> 
                <td> <p>${element.data}</p> </td>
                <td> <p>${element.atividade}</p> </td>
                <td> <p>${element.tempo}</p> </td>
                <td id='tdButton'> <button class="trash-btn" id="${key}">X</button> </td>
         </tr>
        `
    )
}


const deleteItem = (event) => {
    const item = event.target;
    // console.log(item)
    const itemId = item.id
    // console.log(itemId)

    if (item.classList.value === "trash-btn") {
        listaAtividades.splice(itemId, 1)
        addElementToDom(listaAtividades)
        storageUpdate()
    }
}
document.addEventListener("click", deleteItem)

function storageUpdate() {
    localStorage.setItem("logExercicios.atividades", JSON.stringify(listaAtividades))
}