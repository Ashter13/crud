function generateX(){
    const xs=[];
    if(upperEl.checked){
    xs.push(getUppercase());
   }
    if(lowerEl.checked){
     xs.push(get Lowercase());
   }
    if(numberEl.checked){
    xs.push(getNumber());
   }
    if(symbolEl.checked){
     xs.push(getSymbol());
   }
   if(xs.length ===0)return"";
    return xs[Math.floor(Math.random()*xs.length)];
  }
   generateEl.addEventListener("click",
  copyEl.addEventListener("click",()=>{
    const textarea=document.createElement("textarea");
    const password=PwEl.innerText;
    if(!password){
     return;
   }
   textarea.value=password;
   document.body.appendChild(textarea);
                                         generatePassword);
    textarea.select();
   document.execCommand("copy");
    textarea.remove();
   alert("password copied to clipboard");
  });
  function generateX(){
    const xs=[];
    if(upperEl.checked){
     xs.push(getUppercase());
   }
    if(lowerEl.checked){
     xs.push(get Lowercase());
   }
   if(numberEl.checked){
    xs.push(getNumber());
   }
    if(symbolEl.checked){
    xs.push(getSymbol());
   }
    if(xs.length ===0)return"";
    return xs[Math.floor(Math.random()*xs.length)];
  }
   generateEl.addEventListener("click",
   copyEl.addEventListener("click",()=>{
    const textarea=document.createElement("textarea");
    const password=PwEl.innerText;
    if(!password){
     return;
   }
   textarea.value=password;
   document.body.appendChild(textarea);
    textarea.select();
   document.execCommand("copy");
                                         generatePassword);
   textarea.remove();
    alert("password copied to clipboard");
   });