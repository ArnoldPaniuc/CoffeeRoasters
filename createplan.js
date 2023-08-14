// let popup = document.getElementById("popup");

// function openPopup() {
//     popup.classList.add("open-popup");
// }

// function closePopup() {
//     popup.classList.remove("open-popup");
// }


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
