/**************************
 * Question Model
 **************************/
(function (Quiz) {
	'use strict';

	var Question = Ember.Object.extend({
            question: null,
            type: null,
            options: null,
            weight: null,
            imageURL: null,
			/*Computed property that checks if the current question is of fillin type*/
            isFillIn: function () {
                return Ember.isEqual(this.get('type'), "fillin");
            }.property('type')
        });

    Quiz.Question = Question;

})(window.Quiz);
