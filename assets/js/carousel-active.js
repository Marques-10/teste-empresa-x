setInterval(() => {
    var slideOne = document.querySelectorAll(".carousel-item")[0];
    var slideTwo = document.querySelectorAll(".carousel-item")[1];
    var slideThiree = document.querySelectorAll(".carousel-item")[2];   
    var one = document.querySelectorAll(".item");
    var two = document.querySelectorAll(".item");
    var thiree = document.querySelectorAll(".item");

    if (slideOne.className.includes("active")) {
        one[0].classList.add('active');           
    } else {
        if (one[0].className.includes("active")) {
            one[0].classList.remove('active');
        }
    }

    if (slideTwo.className.includes("active")) {
        two[1].classList.add('active');            
    } else {
        if (two[1].className.includes("active")) {
            two[1].classList.remove('active');
        }
    }
    
    if (slideThiree.className.includes("active")) {
        thiree[2].classList.add('active'); 
    } else {
        if (thiree[2].className.includes("active")) {
            thiree[2].classList.remove('active');
        }
    }

}, 1);