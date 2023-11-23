function showFields(){
  document.querySelector(".typeOfUser_box").addEventListener("click", (event)=>{
    if (event.target.value != undefined && event.target.value === "user"){
      document.querySelector(".profissionalInfo_box").classList.add("hidden")
    }
    else{
      document.querySelector(".profissionalInfo_box").classList.remove("hidden")
    }
  })
}
showFields()