function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  document.querySelector("#theForm").onsubmit = calculate;
  // document.querySelector('#theForm').addEventListener('submit', addTask)
  //上方為 W3C 推薦公式，但是有 BAG 過一陣子要重整才有反應
}

function calculate() {
  //BMI = 體重(公斤) / ( 身高(公尺) / 100 )的平方
  //標準女生介於 18.5 ~ 22
  let height = document.querySelector("#height").value; //選取quantity中的value值
  let weight = document.querySelector("#weight").value;

  let bmi = weight / Math.pow(height / 100, 2); //平方 Math.pow(數值,幾次方) ex:Math.pow(4,2)-->16

  bmi = bmi.toFixed(2);

  // if (bmi < 18.5) {
  //   document.querySelector(
  //     "#result"
  //   ).innerHTML = `Your BMI is ${bmi}<br> Below standard!`;
  // } else {
  //   //bmi>=18.5
  //   if (bmi <= 22) {
  //     //bmi>=18.5 且 //bmi>=22
  //     .innerHTML = `Your BMI is ${bmi}<br> Standard-compliant`;
  //   } else {
  //     //bmi>=18.5 且 //bmi>22
  //     .innerHTML = `Your BMI is ${bmi}<br> Exceeds standard!`;
  //   }
  // }

  //if else 中的 if else 寫法
  if (bmi < 18.5) {
    document.querySelector(
      "#result"
    ).innerHTML = `Your BMI is ${bmi} <br> Below standard!`;
  } else if (bmi <= 22) {
    // bmi >=18.5 且 bmi <= 22
    document.querySelector(
      "#result"
    ).innerHTML = `Your BMI is ${bmi} <br> Standard-compliant`;
  } else {
    // bmi >=18.5 且 bmi > 22
    document.querySelector(
      "#result"
    ).innerHTML = `Your BMI is ${bmi} <br> Exceeds standard!`;
  }

  return false; //阻止資料傳送出去
}

window.addEventListener("load", doFirst);
