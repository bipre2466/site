document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');

    const commands = {
        help: 'Voici toutes les commandes disponibles: help, infos, projets, contact',
        infos: 'Je suis un passionné d\'informatique depuis 2020 quand je suis arrivé dans cette communauté.\nJe suis dev javascript et apprends le python.\nJe suis aussi dans quelques projets comme un OrionBots afin que mes clients puissent avoir un bot perso super complet pour pas cher.',
        contact: 'Discord: Misscat4411'
    };

    const initialText = [
        'Bievenue sur mon portofolio !',
        'écrit help pour la liste des commandes.'
    ];

    // Function to simulate typing effect
    function typeText(element, text, delay = 100, callback) {
        let i = 0;
        const interval = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, delay);
    }

    // Display initial text with typing effect
    function displayInitialText() {
        let i = 0;
        function showNextLine() {
            if (i < initialText.length) {
                const newLine = document.createElement('p');
                output.appendChild(newLine);
                typeText(newLine, initialText[i], 50, showNextLine);
                i++;
            } else {
                // Enable input after initial text is displayed
                input.disabled = false;
                input.focus();
            }
        }
        showNextLine();
    }

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            input.value = '';

            if (commands[command]) {
                addOutput(commands[command]);
            } else {
                addOutput(`Command not found: ${command}`);
            }
        }
    });

    function addOutput(text) {
        const newLine = document.createElement('p');
        output.appendChild(newLine);
        typeText(newLine, text, 50);
        output.scrollTop = output.scrollHeight;
    }

    // Clear output and disable input initially
    output.innerHTML = '';
    input.disabled = true;

    // Start displaying the initial text
    displayInitialText();
});
