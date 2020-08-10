document.querySelector("#remove-field")
.addEventListener('click', removeTime)

function removeTime(){
    
    node = document.querySelector(".schedule-item")
    
    node.parentNode.removeChild(node)
                                  
}  
            