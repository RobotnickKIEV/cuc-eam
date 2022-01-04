const wrapper = document.querySelector('.competence__flex-wrapper')
const blocks = document.querySelectorAll('.competence__item');

const func = (e) => {
    blocks.forEach( e => {
        e.classList.remove('active');
    })  
    e.target.classList.add('active');
}

wrapper.addEventListener('click', func);




let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

		}
	});
}

validateForms('.form', {email: {required: true, email: true}, name: {required: true}, tel: {required: true} }, '.thanks-popup', 'send goal');