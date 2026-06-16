
   /* window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.nav');

menu.addEventListener('click', ()=>{
   menu.classList.toggle('fa-times')
   navbar.classList.toggle('active')

   window.onscroll = () => {
      menu.classList.remove('fa-time')
      menu.classList.remove('active')
   }
})
*/

document.addEventListener("DOMContentLoaded", function () {

    // 1. Fetch and Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById("header");
            if (headerContainer) {
                headerContainer.innerHTML = data;
                
                // 🚀 Fire the menu and scroll logic ONLY after the header exists!
                initHeaderLogic();
            }
        })
        .catch(error => console.error("Error loading header:", error));

    // 2. Fetch and Load Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById("footer");
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        })
        .catch(error => console.error("Error loading footer:", error));

});

// 3. All your Header, Scroll, and Mobile Menu Logic
function initHeaderLogic() {
    // --- Sticky Header Logic ---
    // Direct target or fallback to your <div id="header"> wrapper
    const header = document.querySelector('header') || document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 0);
        }
    });

    // --- Mobile Menu Logic ---
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.nav');

    if (menu && navbar) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        // Close menu smoothly when user scrolls
        window.addEventListener('scroll', () => {
            if (navbar.classList.contains('active')) {
                menu.classList.remove('fa-times');
                navbar.classList.remove('active');
            }
        });
    } else {
        console.warn("Could not find #menu-bar or .nav in header.html. Check your class/ID names!");
    }
    function initHeaderLogic() {
    // --- Sticky Header Logic ---
    const header = document.querySelector('header') || document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 0);
        }
    });

    // --- Mobile Menu Logic ---
    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.nav');

    if (menu && navbar) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            if (navbar.classList.contains('active')) {
                menu.classList.remove('fa-times');
                navbar.classList.remove('active');
            }
        });
    }
}
}
