function showFields(){
  document.querySelector(".typeOfUser_box").addEventListener("click", (event)=>{
    
    document.querySelector(".profissionalInfo_box").classList.toggle("hidden")
    console.log(event.target.classList)
  })
}

showFields()