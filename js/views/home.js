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
		userName: null,
        templateName: 'home-view',
        isVisible: function () {
            return Quiz.quizController.get("currentPage") === "home-page";
        }.property('Quiz.quizController.currentPage'),
		userNameField: Ember.TextField.extend({
            elementId: 'userName'
        }),
        isValidUser: function () {
            return (!this.get('userName'));
        }.property('userName')
    });
})(window.Quiz);
