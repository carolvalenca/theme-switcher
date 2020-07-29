const toggle = document.getElementById('toggle')
let root = document.documentElement

toggle.addEventListener('change', changeTheme)

function changeTheme() {
   if (toggle.getAttribute('value') == 'light') {
       root.style.setProperty('--main-txt-color', 'hsl(0, 0%, 100%)');
       root.style.setProperty('--txt-color', 'hsl(228, 34%, 66%)');
       root.style.setProperty('--bg-color', 'hsl(230, 17%, 14%)');
       root.style.setProperty('--card-bg', 'hsl(228, 28%, 20%)');

       toggle.setAttribute('value', 'dark')
   } else {
        root.style.setProperty('--main-txt-color', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--txt-color', 'hsl(228, 12%, 44%)');
        root.style.setProperty('--bg-color', 'white');
        root.style.setProperty('--card-bg', 'hsl(227, 47%, 96%)');

        toggle.setAttribute('value', 'light')
   }
}