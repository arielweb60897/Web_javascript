function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.querySelector('#theForm').onsubmit = setEvent
    // document.querySelector('#theForm').addEventListener('submit', setEvent)
}
function setEvent( e ){
    e.preventDefault()  // page 81

    let events = ['click','select','contextmenu','change','input']
    // events[0]、events[1]、events[2]、events[3]、events[4]
    
    for(let i = 0; i < events.length; i++){
        let yourCheck = document.getElementById(events[i])

        if(yourCheck.checked){
            document.addEventListener(events[i], report)
        }else{
            document.removeEventListener(events[i], report)
        }
    }  
    
    result = document.getElementById('result')  // result 為全域變數
    // result = document.querySelector('#result')

    result.value = ``
}
function report( e ){
    result.value += `${e.target.nodeName}: ${e.type} \n`
}
window.addEventListener('load', doFirst)
// window.onload = doFirst

// JS 有三種可能會呼叫的函數
// 1 直接呼叫: drawing()
// 2 事件聆聽: theButton.onclick = drawing
//            theButton.addEventListener('click',drawing)
// 3 計時器: setInterval(drawing, 毫秒)