const toggleButton = document.getElementById('toggle-button')
const lightModeIcon = document.getElementById('light-mode')
const darkModeIcon = document.getElementById('dark-mode')

let isLightMode = true

toggleButton.addEventListener('click', () => {
    if (isLightMode) {
        darkModeIcon.style.display = 'flex'
        lightModeIcon.style.display = 'none'
        isLightMode = false

    } else {
        darkModeIcon.style.display = 'none'
        lightModeIcon.style.display = 'flex'
        isLightMode = true   
    }
    const currentTheme= document.documentElement.getAttribute('data-theme');
    const newTheme= currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme',newTheme);
})

const addButton = document.getElementById("button");

document.getElementById("button").addEventListener("click", function() {
    let addtask = document.getElementById("add-task");
    addtask.style.display = "flex";
});