(function (win) {
	'use strict';

	win.QuizApp = Ember.Application.create({
		VERSION: '1.0',
		rootElement: '#quizApp',
		ready: function () {
			this.initialize();
		}
	});

})(window);

