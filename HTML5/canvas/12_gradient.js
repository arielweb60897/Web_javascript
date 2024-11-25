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
    
    // 線性漸層
    // let linear = context.createLinearGradient(50, 50, 450, 300); // 對角線
    // let linear = context.createLinearGradient(50, 175, 450, 175);   // 水平
    let linear = context.createLinearGradient(250, 50, 250, 300);   // 垂直
    
    linear.addColorStop(  0, 'red');
    linear.addColorStop(  1, 'blue');
    linear.addColorStop(0.5, 'yellow');
    
    // context.fillStyle='yellow';    
    context.fillStyle=linear;    
    context.fillRect(50, 50, 400, 250); 

    // 放射狀漸層:若內圓與外圓交會或超出外圓，會讓圖形壞掉
    let radial = context.createRadialGradient(250, 575, 50, 200, 575, 120);
    radial.addColorStop(0, 'red');
    radial.addColorStop(1, 'blue');
    
    context.fillStyle=radial;    
    context.fillRect(50, 450, 400, 250);

    // 放射狀漸層: 如何確保內圓一定在外圓裡面? 將放射狀漸層放在圓形的 strokeStyle 
    context.beginPath();

    context.translate(750, 200);
    let radius = 150
    context.lineWidth=15;
    
    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(  0, '#666');
    circle.addColorStop(0.5, '#fff');
    circle.addColorStop(  1, '#666');    

    context.arc(0, 0, radius, 0, 2 * Math.PI);

    context.strokeStyle=circle;    
    context.stroke();    
    
    context.translate(-750, -200);
}
window.addEventListener('load', doFirst)