// code to change background css for "how do you drink your coffee? and the below elements"
document.addEventListener('DOMContentLoaded', function() {
    const capSections = document.querySelectorAll('.cap');
    capSections.forEach(function(capSection) {
        const capsulesElements = capSection.querySelectorAll('.capsules');
        capsulesElements.forEach(function(capsulesElement) {
            capsulesElement.addEventListener('click', function() {
                capsulesElements.forEach(function(element) {
                    element.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });
    });
});

//-----------------------------------------------------------------------------------------------------------------------
//-----------hide all the section with the class cap when loading the website--------------

const dropImages = document.querySelectorAll('.drop');
const capSections = document.querySelectorAll('.cap');
capSections.forEach(section => {
    section.classList.add('hidden');
});


//-----------------------------------------------------------
//-----------adding click event listeners to a set of "drop images" and defining behavior for when these images are clicked-------------- 
dropImages.forEach(dropImage => {
    dropImage.addEventListener('click', () => {
        const capSection = dropImage.closest('.nav-2').nextElementSibling;
        if (capSection) {
            capSection.classList.toggle('hidden'); 
        }
    });
});


//-------------------------------------------------------------------------------------------------------
//--------------------used to toggle the source of an image when a header (with class .drop) is clicked.-----------------------------
const dropHeaders = document.querySelectorAll(".drop");
function toggleImageSrc(header) {
    const image = header.querySelector(".coffeeImage");
    const originalSrc = image.dataset.originalSrc; // Use a data attribute to store the original source
    const altSrc = "/images/Path 2.svg";
    if (image.src === originalSrc) {
        image.src = altSrc;
    } else {
        image.src = originalSrc;
    }
}

//-----------------------------------------------------------------------------------------------
//------------sets up event listeners for each header element with class .drop. When a header is clicked, it calls the toggleImageSrc function, which toggles the source of the associated .coffeeImage between its original source and an alternative source. --------------------------------------
dropHeaders.forEach(header => {
    const image = header.querySelector(".coffeeImage");
    image.dataset.originalSrc = image.src; // Store the original source in a data attribute
    header.addEventListener("click", () => {
        toggleImageSrc(header);
    });
});

//-----------------------------------------------------------------------------------------------------------------------
//-------------Adding eventlisteners to the classes which i want to target and then to replace span from the order summary--------------

//--------First code takes the section 1 by 1-----------------

// document.addEventListener('DOMContentLoaded', function() {
//     const capsules5Options = document.querySelectorAll('.capsules5');
//     const firstSpan = document.getElementById('span1');
//     capsules5Options.forEach(option => {
//       option.addEventListener('click', function() {
//         const selectedCapsule = option.querySelector('h3').textContent;
//         firstSpan.textContent = selectedCapsule;
//       });
//     });
//   });
  
// const capsules1Options = document.querySelectorAll('.capsules1');
// const secondSpan = document.getElementById('span2');
// capsules1Options.forEach(option => {
//   option.addEventListener('click', function() {
//     const selectedCapsule = option.querySelector('h3').textContent;
//     secondSpan.textContent = selectedCapsule;
//   });
// });

// const capsules2Options = document.querySelectorAll('.capsules2');
// const thirdSpan = document.getElementById('span3');
// capsules2Options.forEach(option => {
//   option.addEventListener('click', function() {
//     const selectedCapsule = option.querySelector('h3').textContent;
//     thirdSpan.textContent = selectedCapsule;
//   });
// });

// const capsules3Options = document.querySelectorAll('.capsules3');
// const fourthSpan = document.getElementById('span4');
// capsules3Options.forEach(option => {
//   option.addEventListener('click', function() {
//     const selectedCapsule = option.querySelector('h3').textContent;
//     fourthSpan.textContent = selectedCapsule;
//   });
// });

// const capsules4Option = document.querySelectorAll('.capsules4');
// const fifthSpan = document.getElementById('span5') ;
// capsules4Option.forEach(option => {
//     option.addEventListener('click', function() {
//         const selectedCapsule = option.querySelector('h3').textContent;
//         fifthSpan.textContent = selectedCapsule;
//     });
// });



//---------------------------------------------------------------------
//----------this code has the same as the above is a function that takes the class name and the corresponding span ID as parameters, and then use a loop to add event listeners for each set of options making it shorter and more concise  -------------------

function addCapsuleEventListener(className, spanId) {
    const capsulesOptions = document.querySelectorAll(`.${className}`);
    const span = document.getElementById(spanId); 
    capsulesOptions.forEach(option => {
      option.addEventListener('click', function() {
        const selectedCapsule = option.querySelector('h3').textContent;
        span.textContent = selectedCapsule;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    addCapsuleEventListener('capsules1', 'span2');
    addCapsuleEventListener('capsules2', 'span3');
    addCapsuleEventListener('capsules3', 'span4');
    addCapsuleEventListener('capsules4', 'span5');
    addCapsuleEventListener('capsules5', 'span1');
  });


//------------------------------------------------------------------------------------------------------
  //--------- Used to switch between screen sizes --------------------------
  const mediaQueryMobile = window.matchMedia('(max-width: 375px)');
  function applyStyles(event) {
      if (event.matches) {
          document.getElementById('createPlanStylesheet').href = '/styles/create.mobile.css';
      } else {
          document.getElementById('createPlanStylesheet').href = '/styles/create-plan-1.css';
      }
  }
  applyStyles(mediaQueryMobile);
  mediaQueryMobile.addListener(applyStyles);
  
//-------------------------------------------------------------


function openPopup() {
    document.querySelector('.popup-background').classList.add('open');
}
function closePopup() {
    document.querySelector('.popup-background').classList.remove('open');
}
document.getElementById('createPlanButton').addEventListener('click', openPopup);


//----------------------------------------------------------------------

// Function to update popup content with order summary
function updatePopupContent() {
    const orderSummaryText = document.getElementById('orderSummaryText').innerHTML;
    const popupHeaderText = document.querySelector('.popup h3');
    popupHeaderText.innerHTML = orderSummaryText;
}

// Add an event listener to the "Create your plan" button
document.getElementById('createPlanButton').addEventListener('click', function() {
    openPopup();
    updatePopupContent(); // Call the function to update popup content
});

// Add an event listener to the "Checkout" button inside the popup
document.getElementById('checkoutButton').addEventListener('click', closePopup);
