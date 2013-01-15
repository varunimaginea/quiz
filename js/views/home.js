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
        //template: Ember.Handlebars.compile('<header></header><section id="loginSection"><label for="userName" class="user-detail-label">Enter your name</label>{{view view.userNameField}}    </section>        <section id="controlSection">    {{view view.startButtonView target="Quiz.quizController" action="startQuiz"}}            <button id="help-button" class="navBtn">Help</button>        </section>'),
        //templateName: "homeView",
		userName: "",
		init: function () {
            this._super();
           // this.set('context', this);
        },
		userNameField: Ember.TextField.extend({
            elementId: 'userName'
        }),

        startButtonView: Ember.View.extend({
            tagName: 'button',
            template: Ember.Handlebars.compile('Start'),
            classNames: ['navBtn'],
            elementId: 'start-quiz-button',
            attributeBindings:['disabled'] ,
			disabled: function () {
                 return !(this._parentView.userName.length > 0);
            }.property('this._parentView.userName'),
			click: function (e) {
			     Quiz.quizController.startQuiz();
			}
        })
    });
	
	/*Quiz.AppView = Ember.View.extend({
	    templateName: "application",
		init: function () {
            this._super();
            this.set('context', this);
        }
	});*/
})(window.Quiz);
