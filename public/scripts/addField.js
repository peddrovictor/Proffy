// Procurar o botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)
//Quando clicar no botão

    //Executar uma ação
    function cloneField() {
        const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)    //Duplicar os campos (Que campo?)     //"Node" chamar um HTML   //boolean: true ou false

    //Pegar os campos (quais?)
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field do momento e limpar
    field.value=""
    })
    


    // Colocar na página
        document.querySelector('#schedule-item').appendChild(newFieldContainer)


    }


