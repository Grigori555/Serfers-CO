const ltstBtn = document.querySelector(".update__posts");
const ltBtnCl = document.querySelector(".update-close");
const abBtnCl = document.querySelector(".about-close");

const updItems = document.querySelectorAll(".update__item");


const vieImgItms = document.querySelectorAll(".views__img-item");


/* 1 page Serfboard slaider*/
// vieImgItms.forEach(function(index){
//     index.addEventListener("click",()=>{
//         index.classList.toggle("active");
//     });
// });


for(let j =0; j<=vieImgItms.length-1; j++){
    vieImgItms[j].addEventListener("click",()=>{
        vieImgItms[j].classList.add("active");
        for(let i =j+1; i<=vieImgItms.length-1; i++){
            vieImgItms[i].classList.remove("active");
        };
        for(let k =vieImgItms.length-vieImgItms[j]; k>=0; k--){
            
           console.log("1"+ vieImgItms[k]);
        };
       
    });
}

console.log(vieImgItms.length);

// for(let k =vieImgItms.length-3; k>=0; k--){
            
//     console.log(vieImgItms[k].classList.add("active"));
// };



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