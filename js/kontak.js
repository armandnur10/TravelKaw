document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                if (modal) {
                    modal.classList.add('active');
                    form.reset();
                    clearErrors();
                }
            }
        });
    }

    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const pesanInput = document.getElementById('pesan');

    if (namaInput) {
        namaInput.addEventListener('blur', function() {
            validateField('nama', this.value);
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateField('email', this.value);
        });
    }

    if (pesanInput) {
        pesanInput.addEventListener('blur', function() {
            validateField('pesan', this.value);
        });
    }
});

function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    let isValid = true;

    // Validate nama
    if (!validateField('nama', nama)) {
        isValid = false;
    }

    // Validate email
    if (!validateField('email', email)) {
        isValid = false;
    }

    // Validate pesan
    if (!validateField('pesan', pesan)) {
        isValid = false;
    }

    return isValid;
}

function validateField(fieldName, value) {
    const errorElement = document.getElementById(`error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'nama':
            if (value === '') {
                errorMessage = 'Name cannot be empty';
                isValid = false;
            } else if (value.length < 3) {
                errorMessage = 'Name must be at least 3 characters long';
                isValid = false;
            }
            break;

        case 'email':
            if (value === '') {
                errorMessage = 'Email cannot be empty';
                isValid = false;
            } else if (!isValidEmail(value)) {
                errorMessage = 'Email format is not valid';
                isValid = false;
            }
            break;

        case 'pesan':
            if (value === '') {
                errorMessage = 'Message cannot be empty';
                isValid = false;
            } else if (value.length < 10) {
                errorMessage = 'Message must be at least 10 characters long';
                isValid = false;
            }
            break;
    }

    if (errorElement) {
        errorElement.textContent = errorMessage;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

