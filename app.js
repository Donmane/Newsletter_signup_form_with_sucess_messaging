let butt = document.getElementById("bott");
let mained = document.getElementById("mained")
let view = document.getElementById("view")
let views = document.getElementById("views")
let email = document.getElementById("email")
let para = document.getElementById("para")
let final = document.getElementById("final")
let bomb = document.getElementById("bomb")
let emails = email.value.trim();

butt.addEventListener("click", function(e){
    e.preventDefault();
    let emails = email.value.trim();
    
    if (emails === "" || !emails.includes("@") || !emails.includes(".com")) {
        para.classList.remove("hidden")

        return
    }else{
    view.classList.add("hidden")
    views.classList.remove("hidden")
    }
    final.innerText = `A confirmation email has been sent ${emails}`
})
bomb.addEventListener("click", function (r) {
    r.preventDefault();
    views.classList.add("hidden")
    view.classList.remove("hidden")
    emails.value = ""
    
})