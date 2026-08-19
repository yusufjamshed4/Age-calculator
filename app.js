document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="date"]');
    const dobInput = inputs[0];
    const ageOnInput = inputs[1];
    const calcBtn = document.querySelector('button') || document.querySelector('input[type="submit"]');

    function calculateAge() {
        if (!dobInput || !dobInput.value) {
            alert('Kripya Date of Birth select karein!');
            return;
        }

        const dob = new Date(dobInput.value);
        const targetDate = (ageOnInput && ageOnInput.value) ? new Date(ageOnInput.value) : new Date();

        if (dob > targetDate) {
            alert('Date of Birth future ki nahi ho sakti!');
            return;
        }

        let years = targetDate.getFullYear() - dob.getFullYear();
        let months = targetDate.getMonth() - dob.getMonth();
        let days = targetDate.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const yearsEl = document.getElementById('years');
        const monthsEl = document.getElementById('months');
        const daysEl = document.getElementById('days');
        const resultsBox = document.getElementById('results');

        if (yearsEl) yearsEl.innerText = years;
        if (monthsEl) monthsEl.innerText = months;
        if (daysEl) daysEl.innerText = days;

        if (resultsBox) {
            resultsBox.classList.add('visible');
            resultsBox.style.display = 'block';
        }
    }

    if (calcBtn) {
        calcBtn.addEventListener('click', (e) => {
            e.preventDefault();
            calculateAge();
        });
    }
});
