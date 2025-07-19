let butt = document.getElementById("bott");
let mained = document.getElementById("mained")
let viewa = document.getElementById("view")
let viewb = document.getElementById("views")
butt.addEventListener("click", function (e) {
    e.preventDefault()

    let emai = document.getElementById("emai").value.trim();
    const warn = document.getElementById("warn")
    if (emai === "") {
        warn.classList.remove("hidden")
        return
    }
    else{
        warn.classList.add("hidden")
    
    viewa.classList.add("hidden")
    viewb.classList.remove("hidden")
    }
})
