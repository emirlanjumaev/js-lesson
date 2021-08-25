// // ------------------------HW-1-START---------------------------------------------------
// let age = prompt("How old are you")

// let year = age >= 18 && age <= 35 ? "HELLO":age == 40 ? "SALAM 40" : "ERROR"

// console.log(year)
// if(age >= 18 && age <= 35){
//     console.log("Hello")
// }
// else{
// console.log("EROR")
// }
//------------------------HW-1-END---------------------------------------------------



// ------------------------HW-2-START---------------------------------------------------

// let a = prompt("How old are you ?");
// let b = prompt("How much is it ?");
// let c = prompt("What time is it ?");
// let result = Math.max(a,b,c);

// console.log(result)
// if (a > b && a > c){
//     console.log(a)
// }else if(b > a && b > c){
//     console.log(b)
// }else if(c > a && c > b){
//     console.log(c)
// }

// let d = a > b && a > c ? a : c > a && c > b ? c : b
// console.log(d)



// if ( old < price && price < time){
//     console.log(old);
// }



// } else if ( price < old < time ){
//     console.log(price);
// } else if (time < old < price ){
//     console.log(time);
// }

// ------------------------HW-2-END---------------------------------------------------

// let a = prompt("a");
// let b = prompt("b");
// let c = prompt("c");

// if(a > b && a > c){
//     if(a > b){
//         console.log(a,b,c)
//     }else{
//     console.log(b,c,a)
//     }
// }
// else if(a < b && b > c){
//     if(   )
// }

// let user = prompt("What is your email" );

// if( user === "Admin"){
//     let c = prompt("password")
    
// } 
// else if(user == null) {
//     alert("Отменено")
// }

// else if(user == ""){
//     alert("Отменено")
// }
// else{
//     alert("Я вас не знаю")
// }

// let user = prompt("Whats your email ?");

// if (user === "Admin"){
//     let password = prompt("Password !")
//     if (password === "I'm in charge"){
//         alert("Hello")
//     }else if(password === null || password === ""){
//         alert("Canceled")
//     }
//     else{
//         alert("I don't know you")
//     }
// }
// else if( user === null || user ===""){
//     alert("Canceled")
// }
// else {
// alert("I don't know you")
// }

//  let a = +prompt();

// switch (a) {
//   case 3:
//     alert( 'Маловат' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет тких значений" );
// }
//  if (a === 3){
//      alert('Маловато');
//      alert( 'В точку!' );
//      alert( 'Перебор' );
//      alert( "Нет таких значений" );
//  }
//  else if(a === 4){
//      alert( 'В точку!' );
//       alert( 'Перебор' );
//       alert( "Нет таких значений" );
//  }

// else if(a === 5){
//     alert( 'Перебор' );
//     alert( "Не таких значений" );
//  }
// else{  
//       alert( "Нет таких значений" )
//  }


// let inputValue = +prompt('Enter your age');
// let text;

//  switch(true){
// case (inputValue < 18):
//        text =  'hi baby';
//         break;

//  default:
//         text = "hi"

// }
// console.log(text)

// let i = 0;

// while (i) {  
//         i++
//      console.log(i)   
// }


// for(let i = 0; i <= 100; i++){

// if( i > 50){
//         continue;
// }
// console.log(i)
// }

// -----------------------------------  HW-4 START -------------------------------------------------------------

// Домашка 1: С помощью цикла выводить в консоль только четные цифры, цикл начинается от 0 и до 100 включительно.
// 			Можно использовать любой цикл while, for.

// for(let i = 0; i <= 100; i+= 2 ){
//         console.log(i)
// }


// Домашка 2: Нужно будет создать какой-то функцию название можете придумать сами. Функция ничего не возвращает.
// 			Функция принимает два параметра start, end. Эти параметры нужны чтобы управлять циклом, а именно start это начало цикла
// 			а end это конец цикла. 
// 			Внутрь функции положить код который написали на "Домашка 1" и это должен работать без ошибки когда мы вызываем функию с аргументами.
			
			// Пример:
			// // someFunc - функцию, я сам придумал, вы можете назвать как угодно главное что она должна работать.
			// someFunc(0, 100); // start = 0, end = 100
			
			// // Цикл будет выглядеть вот так: 
			// for (let i = start; i <= end; i++) {
			// 	// code
			// }


			// Если мы сделали всё правильно тогда наш код будет универсальным и мы можем вызвать функцию с разными аргументами.
			// Цикл будет крутиться в зависимости что мы передали на вход функцию с помощью аргументов.
			// Привер:
			// someFunc(2, 50);
			// someFunc(10, 20);
			// someFunc(4, 30);
			// someFunc(50, 500);
			// someFunc(100, 200);


            // function myFunc(start, end) {
			// 	for (let i = start; i <= end; i += 2) {
			// 		console.log(i)
			// 	}
            // }
            // myFunc(2, 50);

// -----------------------------------  HW-4 END -------------------------------------------------------------
  

//--------------------------------------- ШИФР ЦЕЗАРЯ  --------------------

// document.getElementById('tex').oninput = function(){
//     // ШИФРУЕМ
//     const offset = 3;
//     let help = document.getElementById('help');

//     // кодду символго айландыруу
//     help.innerHTML += String.fromCharCode(215);
//     let str = this.value;

//     // символду коддго(цифрага) айландыруу
//     console.log(str.charCodeAt(0));
//     let res = "";

//     for(let i = 0; i < str.length; i++){
//         let code = str.charCodeAt(i);
//         code += offset;
//         res += String.fromCharCode(code);

//     }
// document.getElementById("res").innerHTML = res;
// }

// document.getElementById("tex2").oninput = function(){
//     const offset = 3;
//     let str = this.value;
//     let res = "";


//     for(let i = 0; i < str.length; i++){
//         let code = str.charCodeAt(i);
//         code -= offset;
//         res += String.fromCharCode(code);

//     }

//     document.getElementById("res2").innerHTML = res;

// }


let inner = 20;

for(let i = 1; i <=inner; i++){

	for(let n = 1; n <=inner - i; n++){
	}
	for(let z = 1; z <= i; z++){
		document.write("# ")
	}
	document.write('<br>')
}

document.write("<br> ,<br>,<br>")




let item = 20;
// let inner = 5;

for(let i = 1; i <=item; i++){

	for(let n = 1; n <=item - i; n++){
		document.write( "&nbsp;" )
	}
	for(let z = 1; z <= i; z++){
		document.write("# ")
	}
	document.write('<br>')
}





var height = 30;
 var width = 10;
 var board = "";

 for (var y = 0; y < height; y++) {
     if(y>0) board += "\n";
     for (var x = 0; x < width; x++) {
         if ((x + y) % 2 == 0){
             board += " ";
         } else {
             board += "#";
         }
     }
 }

 console.log(board);






function maxNumber(a, b, s, d, e) {
	let res = Math.max(a, b, s, d, e);
	
	return res;
}

console.log(maxNumber(34, 54, 6, 7, 8));


function minNumber(a, b, s, d, e) {
	let res = Math.min(a, b, s, d, e);
	
	return res;
}

console.log(minNumber(34, 54, 6, 7, 8));

