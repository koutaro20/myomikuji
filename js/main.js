`use strict`;

{
  const btn=document.getElementById(`btn`);

  btn.addEventListener(`click`,()=>{
    const n =Math.floor(Math.random()*101);
    btn.textContent=n;
    console.log(n);
  });
}
