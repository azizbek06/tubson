let user= parseInt(prompt("Sonni kiritish"));

a=0;
for(let i=0; i<user; i++){
    if (user % i===0){
        a++;
    }
}
if (a<=2) {
    alert("Bu tub son😉");
}else{
    alert("Bu son tub son emas😒");
}