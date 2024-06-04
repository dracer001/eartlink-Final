
// script.js
function switchHero() {
    // List of background images
    const images = [
        './media/images/hero-1.jpg',
        './media/images/hero-2.jpeg',
        './media/images/hero-3.gif',
        './media/images/hero-4.jpg'
    ];

    // Select a random image from the list
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Apply the random image as the background of the hero section
    const hero = document.querySelector('header');
    hero.style.backgroundImage = `url('${randomImage}')`;
    
}
switchHero();
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');

    const offCanvasMenu = document.querySelector('.nav-container');
    offCanvasMenu.classList.toggle('open');
}

function changeSlide(e) {
    const target = e.target;
    let galleryItem = target; 
    console.log(galleryItem);
    // Traverse up the DOM to find the closest .gallary element
    while (galleryItem && !galleryItem.classList.contains('gallary')) {
        galleryItem = galleryItem.parentElement;
    }

    if (galleryItem) {
        
        // Remove 'active' class from all .gallary elements
        const allItems = document.querySelectorAll('.gallary');
        allItems.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked .gallary element
        galleryItem.classList.add('active');
        const gallaryId = galleryItem.id;
        console.log(gallaryId);
        // remove all displayed item
        const mainSlide = document.querySelectorAll('.slide-show-box');
        mainSlide.forEach(item => {
            item.classList.remove('display');
            if (gallaryId && item.id.includes(gallaryId)) item.classList.add('display');
        });

        const captionText = galleryItem.querySelector('p').innerText;
        console.log(captionText);
        document.querySelector('.slide-caption').innerText = captionText;
            
                
    }
}

const galleryContainer = document.querySelector('.gallary-container');
galleryContainer.addEventListener('click', changeSlide);
document.getElementsByClassName('gallary')[0].click();

// FAQS

const toggleFaq = () => {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const viewLessBtn = document.getElementById("viewLessBtn");
    const faqItems = document.querySelectorAll(".accordion-item");

    viewMoreBtn.addEventListener("click", function() {
        faqItems.forEach((item, index) => {
            if (index >= 3) { // Show items starting from index 3
                item.style.display = "block";
            }
        });
        viewMoreBtn.style.display = "none";
        viewLessBtn.style.display = "block";
    });

    viewLessBtn.addEventListener("click", function() {
        faqItems.forEach((item, index) => {
            if (index >= 3) { // Hide items starting from index 3
                item.style.display = "none";
            }
        });
        viewMoreBtn.style.display = "block";
        viewLessBtn.style.display = "none";
    });

    // Initially hide FAQ items starting from index 3
    faqItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.display = "none";
        }
    });
}


function checkDeviceWidth() {
    var mediaQuery = window.matchMedia('(min-width: 900px)');
    if (!mediaQuery.matches) {
        toggleFaq();
    }else{
        const faqCollaps = document.querySelectorAll(".accordion-collapse");
        faqCollaps.forEach((item, index) => {
            item.removeAttribute('data-bs-parent');
        });

        const faqItems = document.querySelectorAll(".accordion-item");
        faqItems.forEach((item, index) => {
            item.style.display = "block";
        });

    }
}
    
// function checkDeviceWidth() {
//     var mobileContent = document.getElementById('mobile-only-content');
//     if (window.innerWidth <= 900) {
//         // Show the content for devices with width <= 900px
//                 toggleFaq();

//     }
// }
    // Initial check when the script loads
    checkDeviceWidth();
    
    // Add an event listener for media query changes
    window.matchMedia('(min-width: 900px)').addEventListener('change', checkDeviceWidth);
    // window.addEventListener('resize', checkDeviceWidth);
    

// document.addEventListener("DOMContentLoaded", function() {
//     const accordionItems = document.querySelectorAll('.accordion-item');
//     const viewMoreBtn = document.getElementById('viewMoreBtn');
//     const viewLessBtn = document.getElementById('viewLessBtn');
    
//     // Initially show only the first 3 items
//     accordionItems.forEach((item, index) => {
//         if (index >= 3) {
//             item.style.height = '0px';
//         }
//     });

//     viewMoreBtn.addEventListener('click', function() {

//         accordionItems.forEach((item, index) => {
//             if (index >= 3) {
//                 let itemBody = item.querySelector('.accordion-collapse');
//                 console.log(itemBody.scrollHeight);
//                 item.style.height = item.scrollHeight + itemBody.scrollHeight + 'px';
//             }
//         });
//         // Hide the "View More" button and show the "View Less" button
//         viewMoreBtn.style.display = 'none';
//         viewLessBtn.style.display = 'block';
//     });

//     viewLessBtn.addEventListener('click', function() {
//         // Hide additional items with a transition
//         accordionItems.forEach((item, index) => {
//             if (index >= 3) {
//                 item.style.height = '0px';
//                 item.addEventListener('transitionend', function hideItem() {
//                     // item.style.display = 'none';
//                     item.removeEventListener('transitionend', hideItem);
//                 });
//             }
//         });
//         // Hide the "View Less" button and show the "View More" button
//         viewLessBtn.style.display = 'none';
//         viewMoreBtn.style.display = 'block';
//     });
// });
