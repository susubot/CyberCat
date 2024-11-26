// Select the text and slider elements
const sliderText = document.getElementById('sliderText');
const toggleInput = document.querySelector('.toggle');

// Event listener for when the slider is toggled
toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
        sliderText.textContent = 'E᙭TEᑎᔕIOᑎ EᑎᗩᗷᒪEᗪ'; // Text for "checked" state
        sliderText.style.color = '#95B5C7'
    } else {
        sliderText.textContent = 'E᙭TEᑎᔕIOᑎ ᗪIᔕᗩᗷᒪEᗪ'; // Text for "unchecked" state
        sliderText.style.color = '#536878'
    }
});
