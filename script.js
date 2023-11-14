document.addEventListener("DOMContentLoaded", function () {
    const quote = "This is a sample text for typing speed test.";
    const input = document.getElementById("input");
    const quoteElement = document.getElementById("quote");
    const startButton = document.getElementById("startButton");
    const speedElement = document.getElementById("speed");
    const totalCharactersElement = document.getElementById("totalCharacters");
    const errorsElement = document.getElementById("errors");

    let startTime, endTime;
    let totalCharactersTyped = 0;
    let totalErrors = 0;

    startButton.addEventListener("click", function () {
        input.value = "";
        input.disabled = false;
        input.focus();
        startButton.disabled = true;
        quoteElement.textContent = quote;

        startTime = new Date().getTime();
    });

    input.addEventListener("input", function () {
        if (!startTime) {
            startTime = new Date().getTime();
        }

        totalCharactersTyped = input.value.length;
        totalErrors = countErrors(quote, input.value);

        endTime = new Date().getTime();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const charactersPerSecond = totalCharactersTyped / elapsedTimeInSeconds;
        const wordsPerMinute = charactersPerSecond / 5 * 60;

        totalCharactersElement.textContent = totalCharactersTyped;
        errorsElement.textContent = totalErrors;
        speedElement.textContent = Math.floor(wordsPerMinute);
    });

    function countErrors(original, typed) {
        let errors = 0;
        for (let i = 0; i < typed.length; i++) {
            if (typed[i] !== original[i]) {
                errors++;
            }
        }
        return errors;
    }
});

