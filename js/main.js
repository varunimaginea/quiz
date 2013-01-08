(function (win) {
	'use strict';

	win.Todos = Ember.Application.create({
		VERSION: '1.0',
		rootElement: '#quizApp',
		// Extend to inherit outlet support
		ApplicationController: Ember.Controller.extend(),
		ready: function () {
			this.initialize();
		}
	});

})(window);

