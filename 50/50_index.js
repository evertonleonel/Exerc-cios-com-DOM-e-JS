let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let ampm = document.querySelector('.ampm');

setInterval ( function (){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    //Adicionar zero se tiver apenas 1 digito;
    
    h = ( h < 10 ) ? '0' +  h : h ;
    m = ( m < 10 ) ? '0' +  m : m ;
    s = ( s < 10 ) ? '0' +  s : s ;

    hours.innerHTML = h + '<span> :</span>';
    minutes.innerHTML = m + '<span> :</span>';
    seconds.innerHTML = s + '<span> :</span>';
    ampm.innerHTML = am;

}, 100)
