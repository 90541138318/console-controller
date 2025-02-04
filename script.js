function setTitle(newTitle) {
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = newTitle;
    }
}

// Function to update the description
function setDescription(newDescription) {
    const descriptionElement = document.querySelector('p');
    if (descriptionElement) {
        descriptionElement.textContent = newDescription;
    }
}

// Function to update the background color
function setBackgroundColor(color) {
    const body = document.querySelector('body');
    if (body) {
        body.style.backgroundColor = color;
    }
}

// Function to update the font color for all elements
function setFontColor(color) {
    const body = document.querySelector('body');
    if (body) {
        body.style.color = color;
    }
}

// Function to set the theme (light or dark)
function setTheme(theme) {
    const body = document.querySelector('body');
    if (body) {
        body.classList.remove('light-theme', 'dark-theme');
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else if (theme === 'light') {
            body.classList.add('light-theme');
        }
    }
}