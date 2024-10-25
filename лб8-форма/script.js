        function validateForm() {
            const requiredFields = [
                { id: 'account-number', message: 'Пожалуйста, введите № лицевого счета.' },
                { id: 'house-number', message: 'Пожалуйста, введите номер дома.' },
                { id: 'apartment-number', message: 'Пожалуйста, введите номер квартиры.' },
                { id: 'email', message: 'Пожалуйста, введите email.' },
                { id: 'password', message: 'Пожалуйста, введите пароль.' }
            ];

            let isValid = true;

            requiredFields.forEach(field => {
                const input = document.getElementById(field.id);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.border = '1px solid red';
                    alert(field.message);
                } else {
                    input.style.border = '';
                }
            });

            if (isValid) {
                // Submit the form or perform the desired action
                alert('Форма успешно отправлена!');
            }
        }
   