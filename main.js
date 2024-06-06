let submit = document.querySelector("input");
let front = document.querySelector(".front");
let back = document.querySelector(".back");

let clicked = false;

submit.addEventListener("click",function(){
    if(clicked){
        front.style.animation = "rotate 1s forwards";
        back.style.animation = "rotate2 1s forwards";
    }
})

let massage = document.querySelector(".massage")

let rating = 0;

let circle = document.querySelectorAll(".circle");
circle.forEach((el)=>{
    el.addEventListener("click",function(){
        circle.forEach((x)=>{
            x.classList.remove("active")
        })
        el.classList.add("active")
        clicked = true;
        rating = el.textContent;
        massage.textContent = `You selected ${rating} out of 5`
    })
})


//You selected Add rating here out of 5