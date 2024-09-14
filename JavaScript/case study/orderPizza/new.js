function doFirst() {
  let toggleCheckbox = document.querySelector(`#toggle`);
  let checkboxes = document.querySelectorAll(
    `input[type="checkbox"]:not(#toggle)`
  );

  // checkboxes.forEach(function(){})    // 函數的參數如果是函數 (callback function)
  // checkboxes.forEach(function(checkbox){})
  // checkboxes.forEach( checkbox => {
  //     checkbox.checked = toggleCheckbox.checked
  // } )

  // All/none: checkbox 會發生 change 事件
  toggleCheckbox.addEventListener("change", function () {
    let isChecked = toggleCheckbox.checked;

    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

  // 其他的 checkbox 的 change 事件
  //1
  // checkboxes.forEach(function (checkbox) {
  //   checkbox.addEventListener("change", function () {
  //     //每個品項的勾選，用來確定 All/none 的狀態(勾還是不勾)
  //     let allChecked = true; //假設每個品項都有勾選

  //     checkboxes.forEach(function (data) {
  //       //只要有一個沒勾就 All/none 取消
  //       if (!data.checked) {
  //         //「!」=not
  //         allChecked = false;
  //       }
  //     });
  //     toggleCheckbox.checked = allChecked;
  //   });
  // });

  //2 使用箭頭函數改寫以上

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      //每個品項的勾選，用來確定 All/none 的狀態(勾還是不勾)
      let allChecked = true; //假設每個品項都有勾選

      checkboxes.forEach((data) => {
        //只要有一個沒勾就 All/none 取消
        if (!data.checked) {
          //「!」=not
          allChecked = false;
        }
      });
      toggleCheckbox.checked = allChecked;
    });
  });
}
window.addEventListener("load", doFirst);
