var stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx){
                otherStar.classList.add("active");
            }
        });
        console.log("star of index " + clickedIdx + " was clicked");
        //post star ranking to backend
    });
});