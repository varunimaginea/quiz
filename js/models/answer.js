/**************************
 * Answer Model
 **************************/
(function (QuizApp) {
	'use strict';

	var Answer = Ember.Object.extend({
            answer: null,
            type: null
        });
		
    QuizApp.Answer = Answer;

})(window.QuizApp);
