function doFirst() {
  // 今天是 2024 年 9 月 26 日
  let YYYY = new Date().getFullYear(); //2024
  let MM = new Date().getMonth() + 1; //09
  // console.log(YYYY);
  // console.log(MM);

  // 年的選單
  let year = document.querySelector("#year");
  for (let i = YYYY - 20; i <= YYYY + 20; i++) {
    // step 1: 先建標籤
    let option = document.createElement("option");
    // step 2: 將該標籤的屬性和方法先寫好
    if (i == YYYY) {
      option.selected = true;
    }
    option.value = i;
    option.innerText = i;
    // step 3: 找到爸爸，加進去
    year.appendChild(option);
  }

  // 月的選單
  for (let i = 1; i <= 12; i++) {
    // step 1: 先建標籤
    let option = document.createElement("option");
    // step 2: 將該標籤的屬性和方法先寫好
    if (i == MM) {
      option.selected = true;
    }
    option.value = i;
    option.innerText = i;
    // step 3: 找到爸爸，加進去
    month.appendChild(option);
  }

  // 判斷當月的 1 號是星期幾
  //MM - 1 = 8 = 9 月
  let firstDay = new Date(YYYY, MM - 1, 1).getDay();
  // console.log(firstDay); // 印出 0 週日

  // 判斷當月一共有幾天
  //MM = 9 = 10 月 的 0 就是 9 月的最後一天
  let monthDate = new Date(YYYY, MM, 0).getDate();
  console.log(monthDate); // 30 天

  showCalendar(firstDay, monthDate);
  // console.log(showCalendar);
}
function showCalendar(firstDay, monthDate) {
  let amount = firstDay + monthDate;
  let calendar = document.querySelector("#calendar");

  for (let i = 0; i < amount; i++) {
    if (i % 7 == 0) {
      let week = document.createElement("tr");
      calendar.appendChild(week);
    }
    if (i < firstDay) {
      let tdDate = document.createElement("td");
      tdDate.innerText = "";
    } else {
    }
  }
}
window.addEventListener("load", doFirst);

// 函數三部曲: 宣告、定義、呼叫
// 語法:
// function name(要不要傳參數){
//     要不要有傳回值
//     如果要，要加 return
// }

// 1 不傳參數，沒有傳回值
// function sayHello(){      // 宣告、定義
//     console.log('Hello');
// }
// sayHello()  // 呼叫

// 2 有傳參數，沒有傳回值
// function sayHello(name){      // 宣告、定義
//     console.log(`Hello, ${name}!`);
// }
// sayHello('Peter')  // 呼叫

// 3 有傳參數，有傳回值
// function sayHello(name){      // 宣告、定義
//     console.log(`Hello, ${name}!`);

//     return true
// }
// let ans = sayHello('Peter')  // 呼叫
// console.log(ans);

// 4 不傳參數，有傳回值
// function sayHello(){      // 宣告、定義
//     console.log(`Hello`)

//     return true
// }
// let ans = sayHello()  // 呼叫
// console.log(ans);
