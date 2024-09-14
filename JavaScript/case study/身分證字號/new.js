function doFirst() {
  document.getElementById("checkButton").onclick = check;
}
function check() {
  let myId = document.querySelector("#myId").value;

  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let areaCodeAll = [
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "34",
    "18",
    "19",
    "20",
    "21",
    "22",
    "35",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "32",
    "30",
    "31",
    "33",
  ];
  //檢查輸入的長度是否是 10 位
  if (myId.length != 10) {
    //!= 不等於
    alert(`輸入的長度必須是 10 位`);
  }

  //檢查第一個字是否是 A~Z
  //1
  //   myId = myId.toUpperCase(); //讓輸入的英文變大寫
  //   for (let i = 0; i < letters.length; i++) {
  //     if (myId.charAt(0) == letters[i]) {
  //       //myId 中取得第一個字符（索引從 0 開始）
  //       firstLetter = true;
  //       break; //跳出迴圈
  //     } else {
  //       firstLetter = false;
  //       continue; //回到迴圈的條件判斷
  //     }
  //   }
  //   if (firstLetter == false) {
  //     alert = `第一個字應該是字母 A~Z`;
  //   }

  //2.ES6 提共了新的搜尋方式：陣列.includes()
  if (letters.includes(myId.charAt(0)) == false) {
    alert = `第一個字應該是字母 A~Z`;
  }

  //檢查第二個字是否是 1 or 2
  if (myId.charAt(1) != "1" || myId.charAt(1) != "2") {
    //&& 且 ; || 或 ，兩個都可用
    alert = `第二個字應為 1 or 2`;
  }

  //檢查後面九個數字是否都是數字
  let num9 = myId.substring(1, myId.length);
  // string.substring(startIndex, endIndex)提取從第 1 個索引位置開始，直到字串結尾的所有字符。
  num9 = parseInt(num9); //parseInt() 會解析出數字，並忽略之後的非數字字符。
  console.log(`數字:${num9}`);

  num9 = num9.toString(); //數字轉為字串
  console.log(`字串:${num9}`);

  if (num9.length != 9) {
    //整數本身沒有 length 屬性，所以需要將數字轉回字串。
    alert(`後面九個數字都要是數字`);
  }
  //   檢查碼
  let letter = myId.charAt(0);
  let index = letters.indexOf(letter);

  //   印出 letters 和 areaCodeAll 相對應的值
  //   console.log(areaCodeAll[index]);
  let checkCode = 0;

  // 計算第一個英文字母的加權值
  let areaCode = areaCodeAll[index];
  checkCode += areaCode[0] * 1 + areaCode[1] * 9;

  for (let i = 1; i <= 8; i++) {
    checkCode += myId.charAt(i) * (9 - i);
  }
  checkCode = checkCode % 10;
  // console.log(checkCode)
  if (checkCode == 0) {
    checkCode = 0;
  } else {
    checkCode = 10 - checkCode;
  }

  if (checkCode != myId.charAt(9)) {
    alert(`不是合法的身分證字號`);
  } else {
    alert(`合法的身分證字號!`);
  }
}
window.addEventListener("load", doFirst);
