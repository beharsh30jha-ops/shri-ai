// 🌸 Shri AI Welcome

window.addEventListener("load", () => {
  document.querySelector(".hero-content").style.opacity = "0";
  document.querySelector(".hero-content").style.transform = "translateY(40px)";

  setTimeout(() => {
    document.querySelector(".hero-content").style.transition = "1.2s";
    document.querySelector(".hero-content").style.opacity = "1";
    document.querySelector(".hero-content").style.transform = "translateY(0)";
  }, 300);
});

// 🌟 Floating Sparkles

for (let i = 0; i < 40; i++) {

  let star = document.createElement("div");

  star.className = "star";

  star.style.left = Math.random() * 100 + "%";

  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration =
    (3 + Math.random() * 6) + "s";

  document.body.appendChild(star);

}

// 🌸 Button Animation

document.querySelectorAll("button").forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform = "scale(1.05)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "scale(1)";

  });

});

// 💜 Dynamic Greeting

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

greeting="🌅 Good Morning";

}

else if(hour < 17){

greeting="☀️ Good Afternoon";

}

else if(hour < 21){

greeting="🌆 Good Evening";

}

else{

greeting="🌙 Good Night";

}

console.log(greeting + " from Shri AI");

// ✨ Mouse Glow

document.addEventListener("mousemove",e=>{

document.body.style.backgroundPosition=`${e.clientX/40}px ${e.clientY/40}px`;

});
// 🌸 Floating Lotus Generator

const lotus=["🪷","🌸","✨"];

for(let i=0;i<25;i++){

let flower=document.createElement("div");

flower.className="lotus";

flower.innerHTML=

lotus[Math.floor(Math.random()*lotus.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=

10+Math.random()*12+"s";

flower.style.fontSize=

20+Math.random()*30+"px";

flower.style.animationDelay=

Math.random()*10+"s";

document.body.appendChild(flower);

}
