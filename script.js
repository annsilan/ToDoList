
let username=prompt('Введите свое имя:')
let forTitle=document.getElementById('title')
    
if (username){
    forTitle.innerHTML="Ваш список дел, " + username + ":"
}else {
    forTitle.innerHTML="Ваш список дел, анонимный пользователь:"
}

let count = 0
function list(){
    count = count + 1 
    let myConteiner=document.getElementById('conteiner') 
    let myInput=document.getElementById('input')
    let myOnly5=document.getElementById('only5')

   
   
    let value = myInput.value
    if (count > 5) {
        myOnly5.innerHTML= "Можно ввести до 5 дел"
    }else{
        myConteiner.innerHTML= myConteiner.innerHTML +"<li>" + value +  ";" + "</li>"
    }

        
        
    
    
  
}
