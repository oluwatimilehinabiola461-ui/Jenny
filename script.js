// Elements
const revealBtn = document.getElementById("revealBtn");
const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");
const music = document.getElementById("bgMusic");
const images = document.querySelectorAll(".carousel-img");
const finalMessage = document.getElementById("finalMessage");

let currentImage = 0;
let carouselStarted = false;

// Show reveal button after intro
setTimeout(() => {
  revealBtn.classList.add("show");
}, 1400);

// Button click event
revealBtn.addEventListener("click", () => {
  // Hide first screen
  screenOne.classList.remove("active");

  // Show second screen after transition
  setTimeout(() => {
    screenTwo.classList.add("active");

    // Play background music safely
    music.volume = 0.7;
    music.play().catch(() => {});

    // Launch celebration emojis
    launchEmojis(25); // Number of emojis

    // Start carousel
    if (!carouselStarted) {
      startCarousel();
      carouselStarted = true;
    }
  }, 700);
});

// Carousel function
function startCarousel() {
  const carouselInterval = setInterval(() => {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");

    // Show final message after last image
    if (currentImage === images.length - 1) {
      setTimeout(() => {
        finalMessage.classList.add("show");
      }, 1000);

      // Stop carousel after first loop if desired
      clearInterval(carouselInterval);
    }
  }, 2800);
}

// Celebration emoji splash
function launchEmojis(count = 15) {
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = "🎉";

    // Random horizontal position
    emoji.style.left = Math.random() * 90 + "%";

    // Random delay for staggered effect
    emoji.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }
}
