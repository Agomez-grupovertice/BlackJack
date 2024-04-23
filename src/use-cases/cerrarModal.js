

const cerrarModal = () => {
    
    
    if (document.querySelector(".btn-modal")){
    
        const botonModal = document.querySelector(".btn-modal")
        botonModal.addEventListener("click", function(){
        const modal = document.querySelector(".modal")
        modal.remove()
        })
    }

    

}

export default cerrarModal