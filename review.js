const reviews = [
    {
        id : 1,
        author : "Nizz Sharma",
        job : "Blockchain Developer",
        info : "My Name is NizX"
    },
    {
        id : 2,
        author : "Bikapa Paudel",
        job : "Web Developer",
        info : "My name is Bikalps"
    },
    {
        id : 3,
        author : "Sazz Sharma",
        job : "ML/AI engeenier",
        info : "My name is sazz."
    }
];
const authors = document.querySelector('#name');
const job = document.querySelector('#job');
const info  = document.querySelector('#info');
const img = document.querySelector('.img');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const random = document.querySelector('.random');

let currentIndex = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentIndex);

})

function showPerson(person){
    const item = reviews[person];
    authors.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}
next.addEventListener('click',function(){
    currentIndex++;
    if (currentIndex > reviews.length-1){
        currentIndex=0;
    }
    showPerson(currentIndex);

}
)
previous.addEventListener('click',function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=reviews.length-1;
    }
    showPerson(currentIndex);

}
)
random.addEventListener('click',function(){
    currentIndex = Math.floor(Math.random()*(reviews.length));
     console.log(currentIndex);
    
    showPerson(currentIndex);

}
)
console.log(Math.floor(Math.random()*reviews.length));