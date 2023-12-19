//Shopping page scroll up arrow
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scroll-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100 && (window.innerHeight + window.pageYOffset) < document.body.scrollHeight) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
  
    scrollButton.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

//for fadeIn ANIMation

document.addEventListener('DOMContentLoaded', function () {
  var section4 = document.querySelector('.section4');
  var slideElements = document.querySelectorAll('.slide-from-above, .slide-from-below');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  slideElements.forEach(function (element) {
    observer.observe(element);
  });

  var backgroundObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        backgroundObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  backgroundObserver.observe(section4);
});


//fadeinAnimation for setion5
document.addEventListener('DOMContentLoaded', function () {
  var section5 = document.querySelector('.section5');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);

        document.querySelector('.sec-5-header').classList.add('show');
        document.querySelector('.sec-5-context').classList.add('show');
        document.querySelectorAll('.sec-5-context p').forEach(function (p) {
          p.classList.add('show');
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section5);
});





//SECTION6 
document.addEventListener('DOMContentLoaded', function () {
  var section6 = document.querySelector('.section6');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);

        document.querySelector('.sec-6-header').classList.add('show');
        document.querySelectorAll('.sustainable_icon').forEach(function (icon) {
          icon.classList.add('show');
        });
        document.querySelectorAll('.sustainable-text').forEach(function (text) {
          text.classList.add('show');
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section6);
});


document.addEventListener('DOMContentLoaded', function () {
  var section7 = document.querySelector('.section7');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);

        // Show accordion items
        document.querySelectorAll('.accordion-item').forEach(function (item) {
          item.classList.add('show');
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section7);
});

