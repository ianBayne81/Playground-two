(()=>{"use strict";let e=[];const t=()=>{localStorage.setItem("newMember",JSON.stringify(e))};e=(()=>{const e=localStorage.getItem("newMember");try{return e?JSON.parse(e):[]}catch(e){return[]}})();const n=e.map((e=>e.firstName));console.log(n),console.log(e);const a=e,l=localStorage.getItem("getId"),o=document.querySelector("#first-name"),r=document.querySelector("#last-name"),c=document.querySelector("#age"),i=document.querySelector("#location");(e=>{const t=a.find((t=>t.id===e)),n=document.querySelector("#heading-element"),l=document.createElement("p");l.setAttribute("id","id-heading"),l.textContent=t.id,n.appendChild(l),o.value=t.firstName,r.value=t.lastName,c.value=t.age,i.value=t.location})(l);let u=document.querySelectorAll(".input-element");document.querySelector("#form-element").addEventListener("submit",(function(e){e.preventDefault(),((e,n)=>{let l=a.find((t=>t.id===e));l&&(n.firstName.length<2||n.lastName.length<2||""==n.age||n.location.length<2?alert("Min character length is 2"):n.age<18?alert("Minimum age is 18"):(l.firstName=n.firstName,l.lastName=n.lastName,l.age=n.age,l.location=n.location,t(),alert("Contact saved")))})(l,{firstName:o.value,lastName:r.value,age:c.value,location:i.value})})),document.querySelector("#delete-button").addEventListener("click",(function(e){e.preventDefault(),(e=>{let n=a.findIndex((t=>t.id===e));n>-1&&a.splice(n,1),t()})(l),alert("Contact deleted"),document.querySelector("#id-heading").innerHTML="",u.forEach((e=>e.value="")),location.assign("/index.html")})),document.querySelector("#return-button").addEventListener("click",(function(e){e.preventDefault(),localStorage.removeItem("getId"),location.assign("/index.html")}))})();
//# sourceMappingURL=site-bundle.js.map