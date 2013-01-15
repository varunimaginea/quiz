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
    /*Quiz.HomeView = Ember.View.extend({
        template: Ember.Handlebars.compile('<header></header><section id="loginSection"><label for="userName" class="user-detail-label">Enter your name</label>{{view Quiz.HomeView.userNameField}}    </section>        <section id="controlSection">    {{view Quiz.HomeView.startButtonView target="Quiz.quizController" action="startQuiz"}}            <button id="help-button" class="navBtn">Help</button>        </section>'),


        userNameField: Ember.TextField.create({
            elementId: 'userName'
        }),

        startButtonView: Ember.View.create({
            tagName: 'button',
            template: 'Start',
            classNames: ['navBtn'],
            elementId: 'start-quiz-button',
            validUserName: function () {
                if (this.parentView) {
                    return this.userNameField.value;
                }
                return false;
            }.property('userNameField'),
            disabledBinding: 'validUserName'
        })
    });*/
    Quiz.AView = Ember.View.extend({
        templateName: 'some-template'
    });
})(window.Quiz);
