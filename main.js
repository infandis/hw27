const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let imageIndex = 0;

function slideImage() {
    document.querySelector(".shown").classList.remove("shown");
    images[imageIndex].classList.add("shown");
  }

function updateButtonVisibility() {
  if (imageIndex === 0) {
    prevButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
  }

  if (imageIndex === images.length - 1) {
    nextButton.classList.add('hidden');
  } else {
    nextButton.classList.remove('hidden');
  }
}

function handlePrevClick() {
  if (imageIndex > 0) {
    imageIndex--;
    slideImage();
    updateButtonVisibility();
  }
}

function handleNextClick() {
  if (imageIndex < images.length - 1) {
    imageIndex++;
    slideImage();
    updateButtonVisibility();
  }
}

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);