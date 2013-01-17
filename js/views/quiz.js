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
        userAnswer: '',
        isVisible: function () {
            return Quiz.quizController.get("currentPage") === "question-page";
        }.property('Quiz.quizController.currentPage'),
        controller: null,
        /*Question View Definition*/
        questionView: Ember.View.extend({
            AnswerTextField: Ember.TextField.extend({
                keyUp: function (event) {
                    this.bindingContext.set('currentAnswer', this.get('value'));
                }
            }),
            optionsView: Ember.View.extend({
                tagName: 'a',
                template: Ember.Handlebars.compile('{{view.content}}'),
                classNameBindings: ['selected'],
                selected: false,
                click: function (e) {
                    this._parentView._parentView.forEachChildView(function (view) {
                        view._childViews[0].set("selected", false);
                    });
                    //var userAnswer = this.getPath('contentView.contentView.contentView.content.options').indexOf(this.content);
                    this.bindingContext.set('currentAnswer', this.content);
                    this.set("selected", true);
                }
            })
        }),
        quitButtonView: Ember.View.extend({
            tagName: 'button',
            template: Ember.Handlebars.compile('Quit'),
            classNames: ['navBtn'],
            elementId: 'quit-quiz-button',
            click: function (event) {
                this._parentView.controller.quit();
            }
        }),
        nextButtonView: Ember.View.extend({
            tagName: 'button',
            template: Ember.Handlebars.compile('Next'),
            classNames: ['navBtn'],
            elementId: 'next-quiz-button',
            attributeBindings: ['disabled'],
            disabled: function () {
                return ((this._parentView.userAnswer.length > 0) ? false : true);
            }.property('this._parentView.userAnswer'),
            click: function (event) {
                this._parentView.controller.next();
            }
        }),
        passButtonView: Ember.View.extend({
            tagName: 'button',
            template: Ember.Handlebars.compile('Pass'),
            classNames: ['navBtn'],
            elementId: 'pass-quiz-button',
            click: function (event) {
                this._parentView.controller.pass();
            }
        })

        /*Quiz Controls View Definition*/
    });
})(window.Quiz);
