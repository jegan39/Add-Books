var vitis = document.querySelector(".visi")
var pop_v = document.querySelector(".pop")
var b_ttn = document.getElementById("hbtn")

var canc_el = document.getElementById("cancel")
var ad_d = document.getElementById("add")



b_ttn.addEventListener("click",function(){
    vitis.style.display="block"
    pop_v.style.display="block"
})

canc_el.addEventListener("click",function(event){
    event.preventDefault()
    vitis.style.display="none"
    pop_v.style.display="none"
    
})

var container1 = document.querySelector(".container")
var ad_d = document.getElementById("add")
var input1=document.getElementById("name_b")
var input2=document.getElementById("author_n")
var textare=document.getElementById("desc")



ad_d.addEventListener("click",function(event){
    event.preventDefault()
    var newcont = document.createElement("div")
    newcont.setAttribute("class","book-container")
    newcont.innerHTML = `
        <h2>${input1.value}</h2>
        <h3>${input2.value}</h3>
        <p>${textare.value}</p>
        <button class="delete-btn">Delete</button>
    `;
    container1.append(newcont)

    // Reset input fields
    input1.value = "";
    input2.value = "";
    textare.value = "";

    vitis.style.display="none"
    pop_v.style.display="none"
    
    newcont.querySelector(".delete-btn").addEventListener("click", function () {
        newcont.remove();
    });
})
