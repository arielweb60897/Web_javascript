function doFirst() {
  // 今天是 2024 年 9 月 26 日
  let YYYY = new Date().getFullYear(); // 2024
  let MM = new Date().getMonth() + 1; // 9 ;月份從 0 開始所以要加1

  // 年的選單
  let year = document.querySelector("#year");

  for (let i = YYYY - 20; i <= YYYY + 20; i++) {
    //YYYY - 20 表示往前 20 年；YYYY + 20 則表示往後 20 年
    // step 1: 先建標籤
    let option = document.createElement("option");

    // step 2: 將該標籤的屬性和方法先寫好
    if (i == YYYY) {
      //YYYY=今年2024，如果 i = 2024 則 selected 為真 -->亦指預選 2024
      //<option value="2004" selected>2004</option>
      option.selected = true; // 預選當前年份
    }
    option.value = i; // 設定選項的值
    option.innerText = i; // 設定顯示的文本
    //<option value="2004">2004</option>

    // step 3: 找到爸爸，加進去
    year.appendChild(option);
  }
  // 月的選單
  let month = document.querySelector("#month");

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

  // 判斷當月的 1 號是星期幾 getDay = 星期幾
  //MM - 1 = 8 = 9 月
  // let firstDay = new Date(2024, 8, 1).getDay()=2024/9 第一天為周日;
  let firstDay = new Date(YYYY, MM - 1, 1).getDay();

  // 判斷當月一共有幾天 getDate = 幾號
  //new Date(YYYY, MM, 0) 用 0 作為日期會回到前一個月的最後一天。
  //MM = 9 = 10 月 的 0 就是 9 月的最後一天
  let monthDate = new Date(YYYY, MM, 0).getDate();
  // console.log(monthDate);

  showCalendar(firstDay, monthDate);

  year.addEventListener("change", changeCalendar);
  month.addEventListener("change", changeCalendar);
}
function showCalendar(firstDay, monthDate) {
  let amount = firstDay + monthDate;
  let calendar = document.querySelector("#calendar");

  for (let i = 0; i < amount; i++) {
    if (i % 7 == 0) {
      let week = document.createElement("tr");
      calendar.appendChild(week);

      // trWeek = calendar.appendChild(document.createElement("tr"));
    }
    //當月的 1 號是星期日
    // if (i < firstDay) {
    //   tdDate = trWeek.appendChild(document.createElement("td"));
    //   tdDate.innerText = "";
    // } else {
    //   // date = document.createElement('td')
    //   // trWeek.appendChild(date)
    //   tdDate = trWeek.appendChild(document.createElement("td"));
    //   tdDate.innerText = i - firstDay + 1;
    // }
  }
}
// function changeCalendar() {
//   // 清除原來的月曆
//   let calendar = document.querySelector("#calendar");
//   let childLength = calendar.childNodes.length - 1;

//   for (let i = 2; i <= childLength; i++) {
//     calendar.childNodes[i].innerHTML = "";
//   }

//   // 產生新的月曆
//   let chooseYear = document.querySelector("#year").value;
//   let chooseMonth = document.querySelector("#month").value;

//   // 重選之後的那個月的 1 號是星期幾
//   let firstDay = new Date(chooseYear, chooseMonth - 1, 1).getDay();

//   // 重選之後的那個月一共有幾天
//   let monthDate = new Date(chooseYear, chooseMonth, 0).getDate();

//   showCalendar(firstDay, monthDate);
// }
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
