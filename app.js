let butt = document.getElementById("bott");
let mained = document.getElementById("mained")
let view = document.getElementById("view")
let views = document.getElementById("views")
let email = document.getElementById("email")
butt.addEventListener("click", function(e){
    e.preventDefault();
    let emails = email.value.trim();
    if (emails === "" || !email.includes("@") || !email.includes(".com")) {
        alert("cewio")
        return
    }else{
    view.classList.add("hidden")
    views.classList.remove("hidden")


    }


})