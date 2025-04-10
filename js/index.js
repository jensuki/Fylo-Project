// grab our button and icons
const toggleBtn = document.querySelector('#theme-toggle');
const darkIcon = document.querySelector('#theme-toggle-dark-icon');
const lightIcon = document.querySelector('#theme-toggle-light-icon');

// determine initial theme
const currentTheme = localStorage.getItem('color-theme'); // if exists
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = currentTheme === 'dark' || (!currentTheme && systemPrefersDark);

//  set appropriate icon on page load based on current theme
darkIcon.classList.toggle('hidden', isDark);
lightIcon.classList.toggle('hidden', !isDark);

// toggle event
toggleBtn.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    //save to local storage
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');

    // update icons
    darkIcon.classList.toggle('hidden', isDarkMode);
    lightIcon.classList.toggle('hidden', !isDarkMode);
})