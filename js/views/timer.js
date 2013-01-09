(function (QuizApp) {
	'use strict';

	var TimerCanvasView = Ember.ContainerView.extend({
		tagName: 'canvas',
	    attributeBindings: ['width', 'height'],
	    width: 104,
	    height: 114,
	    updateTimerCanvas: function () {
	        if (this.get('element').getContext) {
                var ctx = this.get('element').getContext('2d');
                ctx.clearRect(0, 0, 104, 114);
                ctx.beginPath();
                ctx.fillStyle = '#00DEFF';
                ctx.lineWidth = 6;
                ctx.moveTo(51, 61);
                ctx.arc(51, 62, 40, 1.5 * Math.PI, (QuizApp.timerController.timer.timerArcEndAngle() + 270) * (Math.PI / 180), false);
                ctx.lineTo(51, 61);
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.stroke();
            }
        }.observes('QuizApp.timerController.timer.timeLeft')
	});

	QuizApp.TimerCanvasView = TimerCanvasView;

})(window.QuizApp);
