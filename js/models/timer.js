/**************************
 * Timer Model
 **************************/
(function (QuizApp) {
	'use strict';

	var Timer = Ember.Object.extend({
            totalTime: null,
            timeLeft: null,
			/*Calculate the Arc End Angle to draw timer hands in the timer canvas view*/
			timerArcEndAngle: function() {
                return ((360 * (this.totalTime - this.timeLeft)) / this.totalTime);
            }
        });

    QuizApp.Timer = Timer;

})(window.QuizApp);
