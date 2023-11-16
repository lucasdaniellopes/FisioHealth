function showFields(){
  x = document.querySelector(".typeOfUser_box").addEventListener("click", (event)=>{
    console.log(event.target.classList)
  })
}

showFields()