const projImgs = document.querySelectorAll(".proj-img");

window.addEventListener("scroll", () => {

    projImgs.forEach((img) => {

        const position = img.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            img.classList.add("show");
        }
        else {
            img.classList.remove("show");
        }

    });

});

const box1 = document.querySelector(".main-box-1");

window.addEventListener("scroll", () => {
    const post = box1.getBoundingClientRect().top;
    const screenPost = window.innerHeight / 1.3;

    if (post < screenPost) {
        box1.classList.add("show1");
    }
    else {
        box1.classList.remove("show1");
    }
})
const box2 = document.querySelector(".main-box-2");

window.addEventListener("scroll", () => {
    const post = box2.getBoundingClientRect().top;
    const screenPost = window.innerHeight / 1.3;

    if (post < screenPost) {
        box2.classList.add("show2");
    }
    else {
        box2.classList.remove("show2");
    }
})

