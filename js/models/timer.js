/**************************
 * Timer Model
 **************************/
(function (Quiz) {
	'use strict';

	var Timer = Ember.Object.extend({
            totalTime: null,
            timeLeft: null,
			/*Calculate the Arc End Angle to draw timer hands in the timer canvas view*/
			timerArcEndAngle: function() {
                return ((360 * (this.totalTime - this.timeLeft)) / this.totalTime);
            }
        });

    Quiz.Timer = Timer;

})(window.Quiz);
