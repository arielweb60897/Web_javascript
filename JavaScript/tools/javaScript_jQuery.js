JavaScript                  jQuery
===============================================
物件.innerHTML              $('物件').html()
-----------------------------------------------
物件.innerText              $('物件').text()
物件.textContent  
-----------------------------------------------
〔HTML 標籤的屬性〕
img物件.src                 $('img').attr('src')
img物件.width               $('img').attr('width', 300)  // setter
                            let ans = $('img').attr('width')  // getter
某物件.id                   $('物件').attr('id','A1001')
-----------------------------------------------
〔CSS 的屬性〕
某物件.style.css屬性        $('物件').css('屬性','屬性值')  // setter
                           let ans = $('物件').css('屬性') // getter
-----------------------------------------------
-----------------------------------------------




setter
    $('p').text('Does it make sense?')
getter
    let ans = $('p').text()

JavaScript 的 setter 與 setter
setter
    img物件.width = 300
getter
    let theWidth = img物件.width