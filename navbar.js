const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');
const menu = document.getElementById("black-panel");
const visualizzazione = document.getElementById("bottonieraSotto");
let settingsFlag = 1;

navIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        this.classList.toggle('open');
		// const visualizzazione = document.getElementById('visualizzazione');
        
        if (settingsFlag % 2 === 0) {
            menu.style.opacity = 0;
            menu.style.pointerEvents = "none";
            menu.style.opacity = 0;
            menu.style.width = "0vw";
            menu.style.color = "var(--fondale)";
			
			// visualizzazione.style.right = "1rem";
			// onSettingsResizeReverse();
        } else {
            menu.style.opacity = 1;
            menu.style.pointerEvents = "all";
            menu.style.width = "29rem";
            menu.style.color = "var(--testo)";

			// visualizzazione.style.right = "33vw";
			// onSettingsResize();
        }
        
        settingsFlag++;
    });
});