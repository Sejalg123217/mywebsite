// const text = ["Sejal", "Web Developer", "Designer", "Coder"];
// let i=0, j=0;
// const typingElement = document.getElementById("typing");
// function typingElement(){
//     if(i < text.length){
//         if( j <text[i].length){
//              typingElement.textContent += text[i].charAt(j);
//              j++;
//              setTimeout(typing, 100)
//         }else{
//             setTimeout(()=>{
//                 typingElement.textContent="";
//                    j = 0;
//         i = (i + 1) % text.length;
//         typing();
//             },1000);
//         }
//     }
// }
// typing();
// const toggleBtn = document.getElementById("dark-mode-toggle");
// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
// });

// document.getElementById("scrollBtn").addEventListener("click", () => {
//   document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
// });


// window.addEventListener("scroll", () => {
//   document.querySelectorAll(".fill").forEach((bar) => {
//     const barTop = bar.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (barTop < windowHeight - 50) {
//       bar.style.width = bar.getAttribute("data-percent") + "%";
//     }
//   });
// });


// document.getElementById("contactForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Thanks for contacting me!");
//   e.target.reset();
// });

// Typing effect
const text = ["Sejal", "Web Developer", "Designer", "Coder"];
let i = 0, j = 0;
const typingElement = document.getElementById("typing");

function typing() {
  if (i < text.length) {
    if (j < text[i].length) {
      typingElement.textContent += text[i].charAt(j);
      j++;
      setTimeout(typing, 100);
    } else {
      setTimeout(() => {
        typingElement.textContent = "";
        j = 0;
        i = (i + 1) % text.length;
        typing();
      }, 1000);
    }
  }
}
typing();

// Dark mode toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Smooth scroll
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
});

// Animate skill bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fill").forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (barTop < windowHeight - 50) {
      bar.style.width = bar.getAttribute("data-percent") + "%";
    }
  });
});

// Form submission alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for contacting me!");
  e.target.reset();
});
