var seconds=00;
var minutes=00;
var hour=00;
var outputseconds=document.getElementById('seconds');
var outputminutes=document.getElementById('minutes');
var outputhours=document.getElementById('hour')
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var intervel;

start.addEventListener('click',()=>{
    clearInterval(intervel);
    intervel= setInterval(startTime, 1000);
});
stop.addEventListener('click',()=>{
    clearInterval(intervel);
});
reset.addEventListener('click',()=>{
    clearInterval(intervel);
    minutes="00";
    seconds="00";
    hour="00";
    outputseconds.innerHTML=seconds;
    outputminutes.innerHTML=minutes;
    outputhours.innerHTML=hour;
});
function startTime(){
    seconds++;
    if(seconds<=9){
        outputseconds.innerHTML="0"+seconds;
    }
    if(seconds>9){
        outputseconds.innerHTML=seconds;
    }
    if(seconds>59){
        minutes++;
        outputminutes.innerHTML="0"+minutes;
        seconds=0;
        outputseconds.innerHTML="0"+seconds;
    }
    if(minutes>9){
        outputminutes.innerHTML=minutes;
    }
    if(minutes>59){
        hour++;
        outputhours.innerHTML="0"+hour;
        minutes=0;
        outputminutes.innerHTML="0"+minutes;
    }
    if(hour>9){
        outputhours.innerHTML=hour;
    }
}  