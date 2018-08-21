'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const denied = 'Доступ запрещен!';
const canceled = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!'; 

const  userLogin = prompt ('Введите логин')
console.log ('логин', userLogin);
if (userLogin === null) {
	alert (canceled);
} else if (userLogin !== adminLogin) {
	alert (denied); 
} else {  
const  userPassword = prompt ('Введите пароль')
console.log ('Пароль', userPassword)
if (userPassword === null) {
	alert (canceled); 
} else if (userPassword !== adminPassword) {
	alert (denied); 	
} else if (userPassword === adminPassword) {
    alert (welcome); 
}
}
