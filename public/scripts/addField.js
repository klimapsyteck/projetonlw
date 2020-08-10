document.querySelector("#add-time")
.addEventListener('click', cloneField)


async function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //this part the code is cleaning the fields in my html
    const fields = newFieldContainer.querySelectorAll('input')
          
        
        fields.forEach( function(field){
            if(field.value == ""){
                alert('É necessário que o horário esteja preenchido pra adicionar novos campos')
            }else{
                field.value = ""
                document.querySelector('#schedule-items').appendChild(newFieldContainer)

            }
            
        })
        
    


        

    
}

