console.log(document.title);

const direction = document.querySelector('#gen-1')
direction.innerText = 'Generasión 1 Pokimon'


const b = document.querySelector('#gen-1').nextElementSibling.querySelectorAll('.infocard ')
for (let i = 0; i<b.length;i++){
    b[i].style.background = 'lightblue'
}
 
console.log(document.URL);

console.log(document.domain);

const image = document.querySelectorAll('.infocard-lg-img > a > img[src]')
for(i = 0; i < image.length; i++){
    console.log(image[i]['src']);
}

for(i = 0; i < image.length; i++){
    image[i].setAttribute('src', "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

const fontFlying = document.querySelectorAll('.infocard-lg-data.text-muted > small > a.itype.flying')
console.log(fontFlying);
for(let i = 0; i < fontFlying.length; i++){
    fontFlying[i].style.background = 'lightgreen'
}

