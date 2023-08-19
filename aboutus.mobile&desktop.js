//---Used to switch between screen sizes-----
const mediaQueryMobile = window.matchMedia('(max-width: 375px)');
function applyStyles(event) {
    if (event.matches) {
        document.getElementById('aboutUsStylesheet').href = '/styles/aboutus.mobile.css';
    } else {
        document.getElementById('aboutUsStylesheet').href = '/styles/aboutus.css';
    }
}
applyStyles(mediaQueryMobile);
mediaQueryMobile.addListener(applyStyles);