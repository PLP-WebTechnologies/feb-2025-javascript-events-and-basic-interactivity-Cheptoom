document.addEventListener('DOMContentLoaded', () => {
    // Button click
    const clickButton = document.getElementById('clickButton');
    if (clickButton) {
        clickButton.addEventListener('click', () => {
            alert('Button Clicked!');
        });
    }

    // Hover effects
    const hoverArea = document.getElementById('hoverArea');
    if (hoverArea) {
        hoverArea.addEventListener('mouseover', () => {
            hoverArea.textContent = 'You are hovering!';
        });
        hoverArea.addEventListener('mouseout', () => {
            hoverArea.textContent = 'Hover Over Me';
        });
    }

    // Keypress detection
    const keypressInput = document.getElementById('keypressInput');
    const keypressOutput = document.getElementById('keypressOutput');
    if (keypressInput && keypressOutput) {
        keypressInput.addEventListener('keydown', (event) => {
            keypressOutput.textContent = `You pressed: ${event.key}`;
        });
    }

    // Bonus: Double click
    const doubleClickButton = document.getElementById('doubleClickButton');
    const secretAction = document.getElementById('secretAction');
    if (doubleClickButton && secretAction) {
        doubleClickButton.addEventListener('dblclick', () => {
            secretAction.style.display = 'block';
            setTimeout(() => {
                secretAction.style.display = 'none';
            }, 2000); // Hide after 2 seconds
        });
    }

    // Long press detection
    const longPressArea = document.getElementById('longPressArea');
    const longPressMessage = document.getElementById('longPressMessage');
    let pressTimer;
    const longPressDuration = 1000; // 1 second

    if (longPressArea && longPressMessage) {
        longPressArea.addEventListener('mousedown', () => {
            pressTimer = setTimeout(() => {
                longPressMessage.style.display = 'block';
                setTimeout(() => {
                    longPressMessage.style.display = 'none';
                }, 2000);
            }, longPressDuration);
        });

        longPressArea.addEventListener('mouseup', clearLongPressTimer);
        longPressArea.addEventListener('mouseout', clearLongPressTimer);

        function clearLongPressTimer() {
            clearTimeout(pressTimer);
        }
    }
    // Button that changes text or color
    const changeTextButton = document.getElementById('changeTextButton');
    const colorChangeButton = document.getElementById('colorChangeButton');

    if (changeTextButton) {
        changeTextButton.addEventListener('click', () => {
            changeTextButton.textContent = (changeTextButton.textContent === 'Change Text') ? 'Text Changed!' : 'Change Text';
        });
    }

    if (colorChangeButton) {
        colorChangeButton.addEventListener('click', () => {
            const currentColor = colorChangeButton.style.backgroundColor;
            colorChangeButton.style.backgroundColor = (currentColor === 'red') ? '' : 'red';
        });
    }

    // Image gallery or slideshow
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = ["https://images.fineartamerica.com/public/images/overview/overviewBeach002.jpg",
        "https://images.fineartamerica.com/public/images/overview/overviewRoundBeachTowel017.jpg",
        "https://images.fineartamerica.com/public/images/overview/overviewBeach005.jpg"];
    let currentIndex = 0;

    if (galleryImage && prevBtn && nextBtn) {
        galleryImage.src = images[currentIndex];

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            galleryImage.src = images[currentIndex];
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        });
    }
    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    // Bonus: Add some animation using JS or CSS
    const animateButton = document.getElementById('animateButton');
    if (animateButton) {
        animateButton.addEventListener('click', () => {
            animateButton.classList.toggle('animate');
        });
    }
    // Form validation
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');

    if (myForm) {
        myForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            validateForm();
        });

        // Bonus: Real-time feedback while typing
        nameInput.addEventListener('input', () => {
            if (!nameInput.value.trim()) {
                displayError(nameError, 'Name is required.');
            } else {
                clearError(nameError);
            }
        });

        emailInput.addEventListener('input', () => {
            if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailError, 'Invalid email format.');
            } else {
                clearError(emailError);
            }
        });

        passwordInput.addEventListener('input', () => {
            if (passwordInput.value.length < 8) {
                displayError(passwordError, 'Password must be at least 8 characters.');
            } else {
                clearError(passwordError);
            }
        });
    }

    function validateForm() {
        let isValid = true;

        // Required field checks
        if (!nameInput.value.trim()) {
            displayError(nameError, 'Name is required.');
            isValid = false;
        } else {
            clearError(nameError);
        }

        if (!emailInput.value.trim()) {
            displayError(emailError, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailError, 'Invalid email format.');
            isValid = false;
        } else {
            clearError(emailError);
        }

        if (!passwordInput.value.trim()) {
            displayError(passwordError, 'Password is required.');
            isValid = false;
        } else if (passwordInput.value.length < 8) {
            displayError(passwordError, 'Password must be at least 8 characters.');
            isValid = false;
        } else {
            clearError(passwordError);
        }

        if (isValid) {
            formMessage.style.display = 'block';
            setTimeout(() => {
                formMessage.style.display = 'none';
                myForm.reset();
            }, 3000);
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(element, message) {
        element.textContent = message;
    }

    function clearError(element) {
        element.textContent = '';
    }
});