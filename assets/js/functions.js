$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

// Navigation Smooth
document.addEventListener('DOMContentLoaded', function() {
  
    let links = document.querySelectorAll('header .nav a');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 

        let targetId = link.getAttribute('href');

        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });

  // Slider
  function initSlider() {
	const slideContainer = document.getElementById("full-slide");
	const slides = slideContainer.querySelectorAll(".banner li");
	const prevButton = slideContainer.querySelector(".prev");
	const nextButton = slideContainer.querySelector(".next");
	let currentIndex = 0;
  
	function showSlide(index) {
	  slides.forEach((slide) => slide.classList.remove("active"));
	  slides[index].classList.add("active");
	}
  
	function goToPreviousSlide() {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	  showSlide(currentIndex);
	}
  
	function goToNextSlide() {
	  currentIndex = (currentIndex + 1) % slides.length;
	  showSlide(currentIndex);
	}
  
	prevButton.addEventListener("click", goToPreviousSlide);
	nextButton.addEventListener("click", goToNextSlide);
  }
  
  initSlider();

  // Ajouter une carte
  function initializeMap() {
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);
	
	  let marker = L.marker([51.505, -0.09]).addTo(map);

    let popupContent = "<strong>Apollo</strong>";
    marker.bindPopup(popupContent).openPopup();
  }

  window.addEventListener('load', initializeMap);