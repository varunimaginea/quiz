(function (Quiz) {
	'use strict';

    Quiz.TimerView = Ember.View.extend({
        tagName: 'canvas',
        attributeBindings: ['width', 'height'],
        width: 104,
        height: 114,
        controller: null,
        updateTimerCanvas: function () {
		    if (this.get('element') && this.get('element').getContext) {
                var context = this.get('element').getContext('2d');
                context.clearRect(0, 0, 104, 114);
                context.beginPath();
                context.fillStyle = '#00DEFF';
                context.lineWidth = 6;
                context.moveTo(51, 61);
                context.arc(51, 62, 40, 1.5 * Math.PI, (this.controller.timerController.timer.timerArcEndAngle() + 270) * (Math.PI / 180), false);
                context.lineTo(51, 61);
                context.fill();
                context.strokeStyle = 'white';
                context.stroke();
            }
        }.observes('controller.timerController.timer.timeLeft')
    });

})(window.Quiz);
