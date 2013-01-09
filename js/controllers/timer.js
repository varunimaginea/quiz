/**************************
 * Timer Controller
 **************************/
(function (QuizApp) {
	'use strict';

	var TimerController = Ember.Controller.extend({
        timer: null,
        updateTimer: null,

		initialize: function (time) {
            this.set('timer', QuizApp.Timer.create({'totalTime': time, 'timeLeft': time}));
        },

        startTimer: function () {
            var that = this;
            that.set("updateTimer", window.setInterval(function () {
                if (that.get('timer').get('timeLeft') > 0) {
                    that.get('timer').set('timeLeft', that.get('timer').get('timeLeft') - 1);
                } else {
                    QuizApp.QuizController.quit();
                }
            }, 1000));
        },
        stopTimer: function () {
            clearInterval(this.get("updateTimer"));
        }
	});

	QuizApp.TimerController = TimerController;
	QuizApp.timerController = TimerController.create();

})(window.QuizApp);
