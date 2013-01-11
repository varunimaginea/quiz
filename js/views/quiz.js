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
        controller: null,
        /*Timer View Definition*/
        timerView: Quiz.TimerView.create({controller: this.controller}),
        /*Question View Definition*/
        questionView: Ember.View.create({
            contentBinding: this.parentView.get('controller').content,
            answerTextField: Ember.TextField.create({
                keyUp: function (event) {
                    this.parentView.controller.set('currentAnswer', this.get('value'));
                }
            }),
            optionsView: Ember.View.create({
                tagName: 'a',
                template: Ember.Handlebars.compile('{{view.content}}'),
                classNameBindings: ['selected'],
                selected: false,
                click: function (e) {
                    this._parentView._parentView.forEachChildView(function (view) {
                        view._childViews[0].set("selected", false);
                    });
                    //var userAnswer = this.getPath('contentView.contentView.contentView.content.options').indexOf(this.content);
                    this.parentView.controller.set('currentAnswer', this.content);
                    this.set("selected", true);
                }
            })
        })
        /*Quiz Controls View Definition*/
    });
})(window.Quiz);
