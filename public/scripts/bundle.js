(()=>{"use strict";let e=[];const t=()=>{localStorage.setItem("newMember",JSON.stringify(e))};e=(()=>{const e=localStorage.getItem("newMember");try{return e?JSON.parse(e):[]}catch(e){return[]}})();const n=function(){const o=document.querySelector("#array-element");o.innerHTML="",e.forEach((e=>{const t=document.createElement("div");t.textContent=e.id,t.classList.add("divs"),o.appendChild(t);let n=e.id;t.setAttribute("id",n)})),document.querySelectorAll(".divs").forEach((o=>{const l=document.createElement("button");l.setAttribute("type","button"),l.textContent="Delete",l.classList.add("deleteButtons"),o.appendChild(l),document.querySelectorAll(".deleteButtons").forEach((function(o){o.addEventListener("click",(function(o){o.preventDefault(),(n=>{const o=e.findIndex((e=>e.id===n));o>-1&&e.splice(o,1),t()})(o.target.parentNode.id),n()}))}))}))},o=e.map((e=>e.firstName));console.log(o),console.log(e),n(),document.querySelector("#form-element").addEventListener("submit",(function(o){o.preventDefault();let l=document.querySelector("#input-one").value,r=document.querySelector("#input-two").value,c=document.querySelector("#input-three").value,u=document.querySelector("#input-four").value,i=document.querySelectorAll(".inputElField");l.length<2||r.length<2||""==c||u.length<2?alert("Enter all fields correctly"):c<18?alert("Minimum age is 18"):(((n,o,l,r)=>{const c="id"+Math.random().toString(16).slice(2);e.unshift({id:c,firstName:n,lastName:o,age:l,location:r}),t()})(l,r,c,u),n()),i.forEach((e=>e.value=""))}))})();
//# sourceMappingURL=bundle.js.map