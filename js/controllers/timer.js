/**************************
 * Timer Controller
 **************************/
(function (Quiz) {
	'use strict';

	var TimerController = Ember.Controller.extend({
        timer: null,
        updateTimer: null,

		initialize: function (time) {
            this.set('timer', Quiz.Timer.create({'totalTime': time, 'timeLeft': time}));
        },

        startTimer: function () {
            var that = this;
            that.set("updateTimer", window.setInterval(function () {
                if (that.get('timer').get('timeLeft') > 0) {
                    that.get('timer').set('timeLeft', that.get('timer').get('timeLeft') - 1);
                } else {
                    Quiz.QuizController.quit();
                }
            }, 1000));
        },
        stopTimer: function () {
            clearInterval(this.get("updateTimer"));
        }
	});

	Quiz.TimerController = TimerController;
	Quiz.timerController = TimerController.create();

})(window.Quiz);
