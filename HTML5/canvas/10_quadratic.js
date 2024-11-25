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
    
    // 四分之一
    context.beginPath();
    
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    
    context.strokeStyle='rgba(0,0,0,0.7)';    
    context.stroke();
    // =====
    
    context.strokeStyle='red';
    context.lineWidth=5;

    let radius = 120 // 試著修改半徑
    
    // 左上
    context.beginPath();    
    
    context.moveTo(150, 250);
    context.quadraticCurveTo(275, 100, 400, 300);
    // context.quadraticCurveTo(350, 650, 400, 300);  // 改變控制點
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;

        context.beginPath(); 
        context.moveTo(150, 250);

        context.lineTo(275, 100);
        // context.lineTo(350, 650);   // 改變控制點

        context.lineTo(400, 300);
        context.stroke();

        context.font='15px sans-serif';
        
        context.fillText('起點(150, 250)', 100, 270);
        
    
}
window.addEventListener('load', doFirst)