
document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generatorBtn = document.getElementById('generator-btn');

    generatorBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = generateLottoNumbers();
        numbers.forEach(number => {
            const numberElement = createNumberElement(number);
            lottoNumbersContainer.appendChild(numberElement);
        });
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function createNumberElement(number) {
        const element = document.createElement('div');
        element.classList.add('lotto-number');
        element.textContent = number;
        return element;
    }
});
