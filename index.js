const hour=document.getElementById("hour");
const minutes=document.getElementById("minute");
const seconds=document.getElementById("second");
const ampm=document.getElementById("ampm");
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampM="AM";
    if(h>12)
    {
        h=h-12;
        ampM="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;s

    hour.innerText=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=ampM;
    setInterval(()=>{
        updateClock();
},1000)
}
updateClock();