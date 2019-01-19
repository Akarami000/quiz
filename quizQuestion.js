function Question(text,choice,answer){
    this.choice=choice
    this.answer=answer;
    this.text=text;

}
Question.prototype.correctAnswer=function(choice){
    return this.answer===choice;
}
