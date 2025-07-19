let butt = document.getElementById("bott");
let mained = document.getElementById("mained")
let viewa = document.getElementById("view")
let viewb = document.getElementById("views")
butt.addEventListener("click", function (e) {
    e.preventDefault
    viewa.classList.toggle("hidden")
    viewb.classList.toggle("hidden")
    // let emai = document.getElementById("emai").value.trim();
    // const warn = document.getElementById("warn")
    // if (warn === "") {
    //     warn.classList.remove("hidden")
    // }
    // else{
    //     warn.classList.add("hidden")
    // }

})
