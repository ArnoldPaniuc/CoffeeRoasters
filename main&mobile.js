//--------------Used to target between mobile and desktop sizes-------------
const mediaQueryMobile = window.matchMedia('(max-width: 375px)');
function applyStyles(event) {
    if (event.matches) {
        document.getElementById('mainStylesheet').href = '/styles/main.mobile.css';
    } else {
        document.getElementById('mainStylesheet').href = '/styles/main.css';
    }
}
applyStyles(mediaQueryMobile);
mediaQueryMobile.addListener(applyStyles);