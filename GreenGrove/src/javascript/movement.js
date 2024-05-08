let currentIndex = 0;
const productsToShow = 4; // Número de produtos exibidos por vez
const totalProducts = 10; // Total de produtos

const carouselContent = document.getElementById('carousel-content');
const productWidth = document.querySelector('#produto1').clientWidth;

function moveCarousel(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalProducts - productsToShow; // Volta ao final
    } else if (currentIndex >= totalProducts - productsToShow + 1) {
        currentIndex = 0; // Volta ao início
    }
    
    const translateXValue = -currentIndex * productWidth;
    carouselContent.style.transform = `translateX(${translateXValue}px)`;
}

document.getElementById('prev').addEventListener('click', () => moveCarousel(-1));
document.getElementById('next').addEventListener('click', () => moveCarousel(1));
