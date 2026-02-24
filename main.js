document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

    function generateLottoNumbers() {
        lottoNumbersContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const numbers = new Set();
            while (numbers.size < 6) {
                numbers.add(Math.floor(Math.random() * 45) + 1);
            }
            const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
            const lottoRow = document.createElement('div');
            lottoRow.classList.add('lotto-row');
            lottoRow.innerHTML = `<span>Game ${i + 1}:</span> ${sortedNumbers.join(', ')}`;
            lottoNumbersContainer.appendChild(lottoRow);
        }
    }

    generateBtn.addEventListener('click', generateLottoNumbers);

    // Initial generation
    generateLottoNumbers();
});