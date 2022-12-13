var timer;
var ele = document.getElementById('timer');
(function(){
    var sec = 0;
    timer = setInterval(()=>{
ele.innerHTML = '00:00'+sec;
sec ++;
    }, 1000)
})()