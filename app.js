
const USERS_KEY = "atlanticCityUsers";
const SESSION_KEY = "atlanticCitySession";
function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}catch{return []}}
function getSession(){try{return JSON.parse(localStorage.getItem(SESSION_KEY)||"null")}catch{return null}}
function updateHeader(){
 const session=getSession();
 document.querySelectorAll("[data-user-name]").forEach(el=>el.textContent=session?session.name:"Invitado");
 document.querySelectorAll("[data-auth-in]").forEach(el=>el.classList.toggle("d-none",!session));
 document.querySelectorAll("[data-auth-out]").forEach(el=>el.classList.toggle("d-none",!!session));
 document.querySelectorAll("[data-logout]").forEach(el=>el.addEventListener("click",()=>{localStorage.removeItem(SESSION_KEY);location.href="index.html"}));
}
document.addEventListener("DOMContentLoaded",updateHeader);
