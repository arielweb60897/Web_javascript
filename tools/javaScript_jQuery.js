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
物件.parentNode             $(物件).parent()
物件.childNodes             $(物件).children()

物件.firstChild             $(物件).first()
物件.lastChild              $(物件).last()

物件.previousSibling        $(物件).prev()  | $(物件).prevAll()  | $(物件).siblings()
物件.nextSibling            $(物件).next()  | $(物件).nextAll()
-----------------------------------------------







***************************************
$('物件').addClass()
$('物件').removeClass()
$('物件').toggleClass()

$('物件').slideDown()
$('物件').slideUp()
$('物件').slideToggle()

$('物件').hide()
$('物件').show()
$('物件').toggle()
***************************************
setter
    $('p').text('Does it make sense?')
getter
    let ans = $('p').text()

JavaScript 的 setter 與 setter
setter
    img物件.width = 300
getter
    let theWidth = img物件.width