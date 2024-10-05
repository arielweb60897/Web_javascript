// const Add = function (x, y) {return x + y;}; //宣告 + 定義
// Add(5, 3); //呼叫
// 1
// const Add = (x, y) => x + y; //IIFE + 箭頭函數

// 2default export 【預設匯出】
const Add = (x, y) => x + y;
export default Add; // 使用方要用【匯入】，每個檔案只會有一個

// named export 【具名匯出】
export const Name = `Peter`;
export const Age = 40;
export const SayHello = () => console.log(`Hello`); //定義&宣告 SayHello
export function sayHi() {
  console.log(`Hi`);
}
const sayHiHi = () => console.log(`HiHi`); //沒有寫在【匯出】中，彈性調整要不要讓【匯入】

// const Add = function(x, y){ return x + y }      // 宣告 + 定義
// Add( 5, 3 )     // 呼叫

// 函數的宣告 + 定義
// function Add(){ ..... }             // 傳統函數
// const Add = function(){ ..... }     // IIFE
// const Add = () => { ..... }         // IIFE + 箭頭函數

// 函數的呼叫
// Add( )

// function functionName(要不要傳參數?){       // 函數的宣告 + 定義
//     .....
//     .....
//     .....
//     return 若要有傳回值，就要寫 return；若沒有傳回值，就不用寫這行
// }

// 1 不傳參數，沒有傳回值
//     function action(){
//         .....
//         .....
//     }
//     action()    // 呼叫

//     const action = () => {  // 將以上傳統函數改成 「IIFE + 箭頭函數」
//         .....
//         .....
//     }

// 2 不傳參數，有傳回值
//     function action(){
//         .....
//         .....
//         return 123
//     }
//     let ans = action()  // 呼叫

// 3 有傳參數，沒有傳回值
//     function action( x ){
//         .....
//         .....
//     }
//     action(111)     // 呼叫

// 4 有傳參數，有傳回值
//     function action( x ){
//         .....
//         .....
//         return 123
//     }

//     let ans = action(222)     // 呼叫
