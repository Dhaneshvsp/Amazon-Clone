let prevButton= document.getElementById("prevButton");
let nextButton= document.getElementById("nextButton");
let slides= document.querySelectorAll(".slides");
let container=document.querySelector('.hero-section');
let counter= 0;

prevButton.addEventListener('click',()=>{
    if(counter==0)
    {
        counter=slides.length-1;
    }
    else 
    {
        counter--;
    }
    slideImages();
});
nextButton.addEventListener('click',()=>{
    if(counter==slides.length-1)
    {
        counter=0;
    }
    else
    {
        counter++;
    }
    slideImages();
})
function slideImages()
{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    });
}
let autoSlide=setInterval(()=>{
    nextButton.click();
},3000);

container.addEventListener('mouseover', () => {
    clearInterval(autoSlide); 
});

container.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        nextButton.click();
    }, 3000); 
});