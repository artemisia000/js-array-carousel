console.log('ok');

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//Refs
const imagesRef = document.querySelector('.images');
const thumbsRef = document.querySelector('.thumbs');

//Indice immagine carousel attiva,in questo caso parto dalla posizione 1
let activeImage = 0;

//Luppo negli array con l indice [i] e inietto e sovrascrivo ogni volta 
for(let i = 0; i < imageCollection.length; i++) {

    //Images
    imagesRef.innerHTML += 
    `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>
    `;

    //Thumbs
    thumbsRef.innerHTML +=
    `
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>
    `;
}


//SET ACTIVE IN IMAGE E THUMB

// //vai nella classe in cui sarà attivo l'active e prendi tutti gli elementi
// console.log(document.getElementsByClassName('image-container'));

//parto dalla posizione activeImage ed aggiungo classe active 
document.getElementsByClassName('image-container')[activeImage].classList.add('active');

document.getElementsByClassName('thumb')[activeImage].classList.add('active');


/**
 * NEXT IMG
 */

const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //aggiorna img attiva
   
    /**
     * infinite loop
     */
    if(activeImage === imageCollection.length - 1){
        activeImage = 0;
    }else{
        activeImage++;
    }


    //Imposta immagine attiva e reset attuale
    //Reset
    document.querySelector('.image-container.active').classList.remove('active');

    //active su successiva
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');

    //Imposta la thumbnail
    //reset
    document.querySelector('.thumb.active').classList.remove('active');

    //active successiva
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
});


/**
 * PREV IMG
 */

const prev = document.querySelector('.prev');

prev.addEventListener('click', function() {

    if(activeImage === 0){
        activeImage = imageCollection.length - 1;      
    }else{
        activeImage--;
     }

    //imposta immagine attiva/reset
    document.querySelector('.image-container.active').classList.remove('active');
    //active successiva
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    //imposta thumb/reset
    document.querySelector('.thumb.active').classList.remove('active');
    //active successiva
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');

    });
