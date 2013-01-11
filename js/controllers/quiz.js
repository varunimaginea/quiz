/**************************
 * Quiz Controller
 **************************/
(function (Quiz, $) {
    'use strict';

    var QuizController = Ember.ArrayController.extend({
        content: [],
        currentIndex: 0,
        correctAnswersCount: 0,
        score: 0,
        timerController: null,
        currentQuestion: function () {
            return this.get('content')[this.get('currentIndex')];
        }.property('currentIndex'),
        currentAnswer: null,
        assessmentArray: [],
        init: function () {
            var self = this;
            $.each(Quiz.questions, function (index, value) {
                var question = Quiz.Question.create({'question': value.question, 'options': value.options, 'weight': value.weight, 'type': value.type, 'imageURL': value.imageURL}),
                    answer = Quiz.Answer.create({'type': value.type, 'answer': value.answer});
                self.pushObject(question);
                self.assessmentArray.push(answer);
            });
        },
        startQuiz: function () {
            //App.get('router').transitionTo('root.quiz');
            this.set('currentIndex', 0);
            this.set('timerController', Quiz.timerController.create(Quiz.questions.time));
        },
        next: function () {
            var currentQuestion = this.get('currentQuestion');
            if (this.evaluateQuestion(currentQuestion)) {
                this.set('correctAnswersCount', this.get('correctAnswersCount') + 1);
                this.set('score', this.get('score') + currentQuestion.get('weight'));
            }
            this.pass();
        },
        pass: function () {
            var currentIndex = this.get('currentIndex');
            this.set('currentAnswer', null);
            if (currentIndex === this.get('content').length - 1) {
                this.quit();
            } else {
                this.set('currentIndex', currentIndex + 1);
            }
        },
        evaluateQuestion: function (question) {
            var currentIndex = this.get('currentIndex'),
                answer = this.get('assessmentArray')[currentIndex].answer,
                userAnswer = this.get('currentAnswer');
            return (answer && userAnswer && isNaN(answer)) ? Ember.isEqual(userAnswer.toLowerCase(), answer.toLowerCase()) : Ember.isEqual(userAnswer, answer);
        },
        quit: function () {
            this.timerController.stopTimer();
        }
    });

    Quiz.QuizController = QuizController;
    /*Quiz.quizController = QuizController.create();
    Quiz.quizView = Quiz.QuizView.create({controller: Quiz.quizController});*/

})(window.Quiz, jQuery);
