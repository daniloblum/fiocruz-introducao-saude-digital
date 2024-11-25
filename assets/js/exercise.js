let exerciseCard = document.querySelectorAll('.exercise');

(function () {
	exerciseCard.forEach(exercise => {
		let exerciseData = exercise.getAttribute('data-exercise');
		let answerOption = exercise.querySelectorAll('.exercise__answers .answer__option');
		let correctAnswerOption = exercise.querySelectorAll('.exercise__answers .answer__option[correct]');
		let submitButton = exercise.querySelector('.exercise__submit button');
		let submitFeedback = exercise.querySelector('.exercise__submit--feedback');
		let submitAnswerFeedback = exercise.querySelector('.exercise__answer--feedback');
		// let feedbackText = answerOption.getAttribute('data-feedback');
		let score = 0;

		submitButton.disabled = true;

		// Select option, depending on exercise type
		answerOption.forEach(option => {
			option.addEventListener('click', function () {
				console.log(exerciseData);
				if (exerciseData === 'one') {
					oneAnswerSelect(option);
				} else if (exerciseData === 'multiple') {
					multipleAnswersSelect(option);
				}
			});

			if (exerciseData === 'dropdown') {
				let answerOptionSelect = option.querySelector('.form-select');

				answerOptionSelect.addEventListener('change', function () {
					dropdownAnswersSelect(option, answerOptionSelect);
				});
			}
		});

		//Submit button to check the options.
		submitButton.addEventListener('click', function () {
			if (submitButton.getAttribute('type') === 'submit' && submitButton.disabled == false) {
				butttonCheck();
			} else {
				buttonReset();
			}
		});

		function oneAnswerSelect(e) {
			if (submitButton.getAttribute('type') === 'submit') {
				// Clear all selected options
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];
					element.classList.remove('exercise__answers--selected');
				}
				e.classList.add('exercise__answers--selected');
				submitButton.disabled = false;
			}
		}

		function multipleAnswersSelect(e) {
			if (submitButton.getAttribute('type') === 'submit') {
				e.classList.toggle('exercise__answers--selected');

				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					if (element.classList.contains('exercise__answers--selected')) {
						submitButton.disabled = false;
						return;
					} else {
						submitButton.disabled = true;
					}
				}
			}
		}

		function dropdownAnswersSelect(eOption, eSelect) {
			let isdisabled = false;

			// Select and unselect a item based on value
			if (submitButton.getAttribute('type') === 'submit') {
				if (eSelect.value > 0) {
					eOption.classList.add('exercise__answers--selected');

					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];

						if (!element.classList.contains('exercise__answers--selected')) {
							isdisabled = true;
						}
					}
				} else {
					eOption.classList.remove('exercise__answers--selected');
					isdisabled = true;
				}

				if (isdisabled) {
					submitButton.disabled = true;
				} else {
					submitButton.disabled = false;
				}
			}
		}

		function butttonCheck() {
			if (submitButton.getAttribute('type') === 'submit') {
				score++;

				if (exerciseData === 'one') {
					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];

						if (element.classList.contains('exercise__answers--selected')) {
							if (element.hasAttribute('correct')) {
								setAnswerCorrect(element);
								blockAnswerOption();
								showAnswerFeedback(element);
							} else {
								setAnswerIncorrect(element);
								blockAnswerOption();
								showAnswerFeedback(element);
							}
						}
					}
				}

				if (exerciseData === 'multiple') {
					let incorrectAnswer = false;
					let correctAnswer = 0;
					let feedbackMultiple;

					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];

						if (element.classList.contains('exercise__answers--selected')) {
							if (element.hasAttribute('correct')) {
								setAnswerCorrect(element);
								blockAnswerOption();
								correctAnswer++;
							} else {
								setAnswerIncorrect(element);
								blockAnswerOption();
								incorrectAnswer = true;
							}
						}
					}

					if (incorrectAnswer) {
						feedbackMultiple = 'incorrect';
						showAnswerFeedback(feedbackMultiple);
					} else if (correctAnswer < correctAnswerOption.length) {
						feedbackMultiple = 'missing';
						showAnswerFeedback(feedbackMultiple);
					} else if (correctAnswer == correctAnswerOption.length) {
						feedbackMultiple = 'correct';
						showAnswerFeedback(feedbackMultiple);
					}
				}

				if (exerciseData === 'dropdown') {
					let feedbackDropdown = true;

					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];

						let elementSelect = element.querySelector('.form-select');
						let elementSelected = elementSelect.options[elementSelect.selectedIndex];

						if (elementSelected.hasAttribute('correct')) {
							setAnswerCorrect(element);
							blockAnswerOption();
							// feedbackDropdown = true;
							// showAnswerFeedback(element);
						} else {
							setAnswerIncorrect(element);
							blockAnswerOption();
							feedbackDropdown = false;
							// showAnswerFeedback(element);
						}
					}
					showAnswerFeedback(feedbackDropdown);
				}

				submitButton.setAttribute('type', 'reset');
				submitButton.innerHTML = 'Recomeçar';
			}
		}

		// Set the incorrect style answer on selected option
		function setAnswerIncorrect(el) {
			el.classList.remove('exercise__answers--selected');
			el.classList.add('exercise__answers--incorrect');
		}

		// Set the correct style answer on selected option
		function setAnswerCorrect(el) {
			el.classList.remove('exercise__answers--selected');
			el.classList.add('exercise__answers--correct');
		}

		// Show feedback
		function showAnswerFeedback(el) {
			if (exerciseData === 'one') {
				feedbackText = el.getAttribute('data-feedback');

				if (el.hasAttribute('correct')) {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">check_circle</span> <strong>Parabéns, você acertou!</strong><br><span class="feedback__content">` + feedbackText + `</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--incorrect');
					submitFeedback.classList.add('exercise__submit__feedback--correct');
				} else {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">cancel</span> <strong>Você não selecionou a(s) resposta(s) correta(s)!</strong><br><span class="feedback__content">` + feedbackText + `</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--correct');
					submitFeedback.classList.add('exercise__submit__feedback--incorrect');
				}
			}
			if (exerciseData === 'multiple') {
				console.log(el);

				if (el === 'incorrect') {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">cancel</span> <strong>Você não selecionou a(s) resposta(s) correta(s)!</strong></span>
												<br></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--correct', 'exercise__submit__feedback--incomplete');
					submitFeedback.classList.add('exercise__submit__feedback--incorrect');

					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];
						if (element.classList.contains('exercise__answers--incorrect')) {
							console.log('feedback de erro ' + i);

							feedbackText = element.getAttribute('data-feedback');

							const feedbackParagraph = document.createElement('span');
							feedbackParagraph.classList.add('feedback__content');
							feedbackParagraph.innerHTML = feedbackText;

							submitFeedback.appendChild(feedbackParagraph);
						}
					}
				} else if (el === 'missing') {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">error</span> <strong>Resposta incompleta!</strong></span>
												<br>
												<span class="feedback__content">Você não selecionou todas as alternativas corretas.</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--correct', 'exercise__submit__feedback--incorrect');
					submitFeedback.classList.add('exercise__submit__feedback--incomplete');
				} else if (el === 'correct') {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">check_circle</span> <strong>Parabéns, você acertou!</strong></span>
												<br>
												<span class="feedback__content">Parabéns, você acertou todas as alternativas.</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--incomplete', 'exercise__submit__feedback--incorrect');
					submitFeedback.classList.add('exercise__submit__feedback--correct');
				}
			}

			if (exerciseData === 'dropdown') {
				if (!el) {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">cancel</span> <strong>Você não selecionou a(s) resposta(s) correta(s)!</strong></span>
												<br>
												<span class="feedback__content">Das incorretas, a correlação é a seguinte:</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--correct');
					submitFeedback.classList.add('exercise__submit__feedback--incorrect');

					for (let i = 0; i < answerOption.length; i++) {
						const element = answerOption[i];
						if (element.classList.contains('exercise__answers--incorrect')) {
							console.log('feedback de erro ' + i);

							feedbackText = element.getAttribute('data-feedback');

							const feedbackParagraph = document.createElement('span');
							feedbackParagraph.classList.add('feedback__content');
							feedbackParagraph.innerHTML = feedbackText;

							submitFeedback.appendChild(feedbackParagraph);
						}
					}
				} else {
					submitFeedback.innerHTML = `<div><span class="material-symbols-rounded">check_circle</span><strong>Parabéns, você acertou!</strong>
												<br>
												<span class="feedback__content">Parabéns, você acertou todas as alternativas.</span></div>`;
					submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--incorrect');
					submitFeedback.classList.add('exercise__submit__feedback--correct');
				}
			}
		}

		function blockAnswerOption() {
			for (let i = 0; i < answerOption.length; i++) {
				const element = answerOption[i];

				element.classList.add('exercise__answers--blocked');

				if (exerciseData === 'dropdown') {
					element.querySelector('select').disabled = true;
				}
			}
		}

		function buttonReset() {
			if (submitButton.getAttribute('type') === 'reset') {
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					element.classList.remove('exercise__answers--correct', 'exercise__answers--incorrect', 'exercise__answers--blocked', 'exercise__answers--selected');
					submitButton.setAttribute('type', 'submit');
					submitButton.innerHTML = 'Conferir';
					submitButton.disabled = true;

					if (exerciseData === 'dropdown') {
						const optionSelect = element.querySelector('select');

						optionSelect.disabled = false;
						optionSelect.selectedIndex = 0;
					}
				}

				if (submitFeedback.classList.contains('exercise__submit__feedback--correct')) {
					score = 0;
				}
				submitFeedback.classList.remove('exercise__submit__feedback--correct', 'exercise__submit__feedback--incorrect');
				submitFeedback.classList.add('d-none');

				submitFeedback.removeChild(submitFeedback.querySelector('div'));

				if (submitAnswerFeedback) {
					submitAnswerFeedback.classList.add('d-none');
				}
			}
		}
	});
})();
