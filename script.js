const slides = document.querySelectorAll('.carousel img');
let currentIndex = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

slides.forEach((_, i) => {
    let dot = document.createElement('span');
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(i) {
    slides.forEach((s, j) => {
        s.classList.remove('active');
        dots[j].classList.remove('active');
        if (i === j) {
            s.classList.add('active');
            dots[j].classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
setInterval(nextSlide, 10000);

showSlide(currentIndex);

const form = document.getElementById("saladForm");
const result = document.getElementById("result");

if(form){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const baseSelect = document.getElementById("base");
        const base = baseSelect.value;
        let price = parseFloat(baseSelect.selectedOptions[0].dataset.price) || 0;

        const dressingSelect = document.getElementById("dressing");
        const dressing = dressingSelect.value;
        price += parseFloat(dressingSelect.selectedOptions[0].dataset.price) || 0;

        const checked = document.querySelectorAll('input[type="checkbox"]:checked');
        let proteins = [], toppings = [];

        checked.forEach(c => {
            if (["Grilled Chicken", "Tofu", "Salmon", "Steak"].includes(c.value)) {
                proteins.push(c.value);
                price += parseFloat(c.dataset.price) || 0;
            } else {
                toppings.push(c.value);
                price += parseFloat(c.dataset.price) || 0;
            }
        });

        result.style.display = "block";
        result.innerHTML = `
            <h3>Your Custom Salad</h3>
            <p><strong>Base:</strong> ${base}</p>
            <p><strong>Proteins:</strong> ${proteins.join(", ") || "None"}</p>
            <p><strong>Toppings:</strong> ${toppings.join(", ") || "None"}</p>
            <p><strong>Dressing:</strong> ${dressing}</p>
            <p><strong>Total Price:</strong> $${price.toFixed(2)}</p>
        `;
    });
}

const signUpForm = document.getElementById("signUpForm");
const logInForm = document.getElementById("logInForm");

if(signUpForm){
    signUpForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Sign Up Successful!");
    });
}

if(logInForm){
    logInForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Log In Successful!");
    });
}
