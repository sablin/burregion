

<meta charset="UTF-8">
<?php 
// ----------------------------конфигурация-------------------------- // 
 

$adminemail1="burregion38@yandex.ru";  // e-mail админа

$adminemail2="burregion.38@mail.ru";  // e-mail админа
 
$adminemail3="burregion38.irk@gmail.com";  // e-mail админа
 
//---------------------------------------------------------------------- // 
 
   
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$phone=$_POST['phone']; 

$place=$_POST['place']; 

$dop=$_POST['dop'];
 
 
  
 
$msg=" 
Заказ консультации по бурению скважин
Имя: $name
Телефон: $phone
Место бурения: $place
Дополнительная информация: $dop
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail1", "Сообщение 
от $phone", "$msg", "Content-type:text/html; charset = utf-8"); 

mail("$adminemail2", "Сообщение 
от $phone", "$msg", "Content-type:text/html; charset = utf-8"); 

mail("$adminemail3", "Сообщение 
от $phone", "$msg", "Content-type:text/html; charset = utf-8"); 