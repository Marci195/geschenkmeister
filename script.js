
document.addEventListener("DOMContentLoaded",()=>{
 const b=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-nav]");
 if(b&&n)b.addEventListener("click",()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",String(o))});
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
 const input=document.querySelector("[data-site-search]");
 if(input){
  const cards=[...document.querySelectorAll("[data-search-item]")];
  input.addEventListener("input",()=>{
   const q=input.value.trim().toLowerCase();
   cards.forEach(c=>c.hidden=q&&!c.textContent.toLowerCase().includes(q));
  });
 }
});
