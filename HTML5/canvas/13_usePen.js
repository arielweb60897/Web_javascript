function doFirst(){
    let canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    // 格(隔)線
    context.beginPath();
    let gap = 50
    if(canvas.width > canvas.height){
        range = canvas.width / gap
    }else{
        range = canvas.height / gap
    }

    for(let i = 0; i <= range; i++){
        let interval = i * gap

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);      

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 8);
        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // =======
    
    canvas.addEventListener('mousemove', drawing)
}
function drawing( e ){
    context.fillStyle='maroon';
    context.strokeStyle='maroon';
    
    // 矩形畫筆
    // context.fillRect(e.pageX-8, e.pageY-8, 5, 5);
    // context.strokeRect(e.pageX-8, e.pageY-8, 5, 5);

    // 圓形畫筆
    context.beginPath();    
    context.arc(e.pageX-8, e.pageY-8, 5, 0, 2 * Math.PI);
    // context.fill();
    context.stroke();
}
window.addEventListener('load', doFirst)