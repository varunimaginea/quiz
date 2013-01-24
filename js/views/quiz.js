/**
 * Created with IntelliJ IDEA.
 * User: varunp
 * Date: 11/1/13
 * Time: 11:51 AM
 * To change this template use File | Settings | File Templates.
 */
(function (Quiz) {
    'use strict';
    Quiz.QuizView = Ember.View.extend({
        templateName: 'quiz-view',
        isAnswered: function () {
		    return (!this.controller.get('currentAnswer'));
		}.property('this.controller.currentAnswer'),
        isVisible: function () {
            return Quiz.quizController.get("currentPage") === "question-page";
        }.property('Quiz.quizController.currentPage'),
        controller: null,
		/*Question View Definition*/
        questionView: Ember.View.extend({
            AnswerTextField: Ember.TextField.extend({
			    keyUp: function (event) {
                    this.bindingContext.set('userAnswer', this.get('value'));
                }
            }),
            optionsView: Ember.View.extend({
                tagName: 'a',
                template: Ember.Handlebars.compile('{{view.content}}'),
                classNameBindings: ['selected'],
                selected: false,
                click: function (event) {
                    this._parentView._parentView.forEachChildView(function (view) {
                        view._childViews[0].set("selected", false);
                    });
                    //var userAnswer = this.getPath('contentView.contentView.contentView.content.options').indexOf(this.content);
                    this.bindingContext.set('currentAnswer', this.content);
                    this.set("selected", true);
                }
            })
        })
    });
})(window.Quiz);
