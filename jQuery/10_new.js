$(function () {
  // 偵測目前 div 的 font-size
  //   let currentSize = $("div").css("fontSize"); //getting
  //   alert(currentSize); //div 的 font-size ==> 16px
  $("#shrink").click(function () {
    changeSize("small");
  });

  $("#enlarge").click(function () {
    changeSize("big");
  });

  // changeSize => 宣告 + 定義
  //  size => 變數接受 small or big
  function changeSize(size) {
    //parseInt 將字符串轉換為整數，非數字字符:parseInt 將會在遇到這些字符時停止解析。
    let currentSize = parseInt($("div").css("fontSize"));
    if (size == "small") {
      newSize = currentSize - 2;
    }
    //else if (size == "big"){} // 可不寫，因為這邊是二選一
    else {
      newSize = currentSize + 2;
    }
    $("div").css("fontSize", newSize);
  }
});
