let flag=0;


function controller(x)
{
    flag=flag+x;
    slideshows(flag);

}


slideshows(flag);

function slideshows(num){ 
    let slides=document.getElementsByClassName('slide');

    for (let y of slides)
    {
        y.style.display="none";
    }

    if(num == slides.length){
        flag=0;
        num=0;
    }
    else if(num <0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    
    
    slides[num].style.display="block";

 
}

