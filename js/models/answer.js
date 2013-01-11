/**************************
 * Answer Model
 **************************/
(function (Quiz) {
	'use strict';

	var Answer = Ember.Object.extend({
            answer: null,
            type: null
        });
    Quiz.Answer = Answer;
})(window.Quiz);
