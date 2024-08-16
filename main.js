
// Home Page clint slider 01

jQuery(document).ready(function($) {
  $('.client-logo-slide-track').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: 'linear',
      arrows: false,
      dots: false,
      infinite: true,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          }
      ]
  });
});



// Chatbot Close more deals
document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chat-container');
  const messages = Array.from(document.querySelectorAll('.chat-message'));
  let index = 1;
  let hiddenMessageIndex = 3; // Index after which messages start hiding (0-based)

  function showMessage() {
      if (index < messages.length) {
          if (index > hiddenMessageIndex) {
              messages[index - hiddenMessageIndex - 1].classList.add('hidden');
          }

          messages[index].classList.add('fade-in');
          index++;

          setTimeout(showMessage, 2000); // Adjust the delay as needed
      } else {
          resetMessages();
      }
  }

  function resetMessages() {
      messages.forEach(message => {
          message.classList.remove('hidden', 'fade-in');
      });
      index = 0;
      setTimeout(showMessage, 0); // Restart animation immediately without delay
  }

  showMessage();
});


// Chatbot Improved Customer Experience

document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chat-container-02');
  const messages = Array.from(document.querySelectorAll('.chat-message-02'));
  let index = 0;
  let hiddenMessageIndex = 4; // Index after which messages start hiding (0-based)

  function showMessage() {
      if (index < messages.length) {
          if (index > hiddenMessageIndex) {
              messages[index - hiddenMessageIndex - 1].classList.add('hidden');
          }

          messages[index].classList.add('fade-in');
          index++;

          setTimeout(showMessage, 2000); // Adjust the delay as needed
      } else {
          resetMessages();
      }
  }

  function resetMessages() {
      messages.forEach(message => {
          message.classList.remove('hidden', 'fade-in');
      });
      index = 0;
      setTimeout(showMessage, 0); // Restart animation immediately without delay
  }

  showMessage();
});



// FAQs

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
          const answer = item.querySelector('.faq-answer');

          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
      });
  });
});



// /Mobile Nav

document.querySelector('.mobile-nav').addEventListener('click', function() {
    document.querySelector('.navbar-new').classList.toggle('mobile-v1');
});

document.querySelector('.mobile-nav').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('crros');
});



// Header sticky
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header-box');
    var heroSection = document.querySelector('.hero-section');

    function checkSticky() {
        if (heroSection) {
            // For home page with .hero-section
            if (window.scrollY > heroSection.offsetHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        } else {
            // For other pages without .hero-section
            var triggerHeight = 30; // Adjust as needed
            if (window.scrollY > triggerHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    }

    // Check sticky on scroll
    window.addEventListener('scroll', checkSticky);
    
    // Initial check in case the page is already scrolled
    checkSticky();
});


// Dropdown menu behavior
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-link-box');
    let currentlyOpenMenu = null; // Track the currently open menu

    const toggleDropdown = (menu) => {
        // If the menu is currently open, close it
        if (menu === currentlyOpenMenu) {
            menu.classList.remove('show');
            currentlyOpenMenu = null;
        } else {
            // Close the currently open menu if it exists
            if (currentlyOpenMenu) {
                currentlyOpenMenu.classList.remove('show');
            }
            menu.classList.add('show');
            currentlyOpenMenu = menu;
        }
    };

    menuItems.forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from closing the menu

            // Toggle the clicked menu
            toggleDropdown(menu);
        });

        // Prevent dropdown from closing when clicking inside
        menu.querySelector('.dropdown-menu').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Close all dropdowns if clicking outside
    document.addEventListener('click', () => {
        menuItems.forEach(menu => {
            menu.classList.remove('show');
        });
        currentlyOpenMenu = null;
    });
});

// Menu active
document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});



// Function to remove spaces from email input field
document.getElementById('inputText').addEventListener('input', function(event) {
    var input = event.target;
    input.value = input.value.replace(/\s/g, ''); // Remove spaces
  });

  function signUpForFree() {
    // Get the email value
    var emailInput = document.getElementById("inputText");
    var email = emailInput.value.trim();

    // Check if the email is empty
    if (email === '') {
      // Prompt user to enter their email in the input box
      emailInput.placeholder = "Please enter your email";
      emailInput.focus(); // Focus back to the input box
      return; // Exit the function if email is empty
    }

    // Construct the URL with the email parameter
    var url = "https://app.hafooz.com/company-signup?email=" + encodeURIComponent(email);

    // Redirect to the URL
    window.location.href = url;
  }
