function check(){
let s=document.getElementById("pwd").value;
let n=s.length,u=0,l=0,d=0,sp=0;
for(let c of s){
if(/[A-Z]/.test(c))u++;
else if(/[a-z]/.test(c))l++;
else if(/[0-9]/.test(c))d++;
else sp++;
}
let res=document.getElementById("result");
if(n>=8&&u>0&&l>0&&d>0&&sp>0)res.innerText="Strong";
else if(n>=6&&((u>0&&l>0)||(d>0&&l>0)))res.innerText="Medium";
else res.innerText="Weak";
}
