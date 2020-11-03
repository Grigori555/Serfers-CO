const ltstBtn = document.querySelector(".update__posts");
const ltBtnCl = document.querySelector(".update-close");
const abBtnCl = document.querySelector(".about-close");

const updItems = document.querySelectorAll(".update__item");


const vieImgItms = document.querySelectorAll(".views__img-item");


/* 1 page Serfboard slaider*/
for(let i = 0; i<=vieImgItms.length; i++){
  
    vieImgItms[i].addEventListener("click",()=>{
        vieImgItms[i].classList.remove("active");
        if(vieImgItms[i].classList.contains("active")){
            vieImgItms[i].classList.remove("active");
        }else{
            vieImgItms[i].classList.add("active")
        }
    });
}
/* 2 page latest updates */
abBtnCl.addEventListener("click",()=>{
   console.log("hello");
});



/* 4 page latest updates */
ltstBtn.addEventListener("click",()=>{
    for(let i = 0; i <=updItems.length; i++){
        updItems[i].classList.remove("hidden");
    }
});

ltBtnCl.addEventListener("click",()=>{
    for(let i = 3; i <=updItems.length; i++){
        updItems[i].classList.add("hidden");
    }
});