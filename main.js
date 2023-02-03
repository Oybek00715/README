


// let h1 = document.querySelector ('h1')

// let hours = new Date().getHours()   
// if(hours < 24 ) {
//     h1.innerHTML = 'Добрый утро!'
//     document.querySelector('.moon').style.background = 'yellow'
// }else if (hours <  17) {
//     h1.innerHTML = 'Добрый Обед!'
// }else if (hours <  23) {
//     h1.innerHTML == 'Спокойно ночь!'
//     document.querySelector('.moon').style.background = 'black'

// }


let mouth = new Date().getMonth()
mouth = mouth+1
let img = document.querySelector('img')
if(mouth == 1 || mouth == 2 || mouth == 3){
    img.src = 'https://emosurff.com/i/00019J0r3n0a/1386792659_zimnie-peyzazhi-5.jpg'
} else if(mouth == 4 || mouth == 5 || mouth == 3) {

}
console.log(mouth);




            
