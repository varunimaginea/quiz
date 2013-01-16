/**
 * Created with IntelliJ IDEA.
 * User: varunp
 * Date: 15/1/13
 * Time: 7:56 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with IntelliJ IDEA.
 * User: varunp
 * Date: 11/1/13
 * Time: 11:51 AM
 * To change this template use File | Settings | File Templates.
 */
(function (Quiz) {
    'use strict';
    Quiz.HomeView = Ember.View.extend({
		userName: "",
        templateName: 'home-view',
        isVisible: function () {
            return Quiz.quizController.get("currentPage") === "home-page";
        }.property('Quiz.quizController.currentPage'),
		userNameField: Ember.TextField.extend({
            elementId: 'userName'
        }),
        startButtonView: Ember.View.extend({
            tagName: 'button',
            template: Ember.Handlebars.compile('Start'),
            classNames: ['navBtn'],
            elementId: 'start-quiz-button',
            attributeBindings: ['disabled'],
			disabled: function () {
                return ((this._parentView.userName.length > 0) ? false : true);
            }.property('this._parentView.userName'),
			click: function (event) {
			    Quiz.quizController.startQuiz();
			}
        })
    });
})(window.Quiz);
