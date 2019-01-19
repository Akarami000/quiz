function Quiz(question){
    this.question=question
    this.questionIndex=0
    this.score=0
}
Quiz.prototype.getQuestionIndex=function(){
return this.question[this.questionIndex]
}
Quiz.prototype.guess=function(answer){
    if (this.getQuestionIndex().correctAnswer(answer)){
         this.score++
         }
   this.questionIndex++
}
Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.question.length
}
