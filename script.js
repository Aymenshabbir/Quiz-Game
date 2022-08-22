const questions = [
	{
			question: "Which was the first purely object oriented programming language developed?",
			optionA: "Kotlin",
			optionB: "SmallTalk",
			optionC: "Java",
			optionD: "C++",
			correctOption: "optionB"
	},{
			question: "Which feature of OOP indicates code reusability?",
			optionA: " Abstraction",
			optionB: " Polymorphism",
			optionC: "Encapsulation",
			optionD: " Inheritance",
			correctOption: "optionD"
	},{
			question: "Which header file is required in C++ to use OOP ?",
			optionA: "stdlib.h",
			optionB: " iostream.h",
			optionC: "OOP can be used without using any header file",
			optionD: " stdio.h",
			correctOption: "optionC"
	},{
			question: " Which among the following doesn’t come under OOP concept ?",
			optionA: "Data hiding",
			optionB: "Message passing",
			optionC: "Platform independent",
			optionD: "Data binding",
			correctOption: "optionC"
	},{
			question: "How many types of access specifiers are provided in OOP (C++)?",
			optionA: "3",
			optionB: "1",
			optionC: "4",
			optionD: "2",
			correctOption: "optionA"
	},{
			question: " In multilevel inheritance, which is the most significant feature of OOP used?",
			optionA: " Code efficiency",
			optionB: " Code readability",
			optionC: "Flexibility",
			optionD: "Code reusability",
			correctOption: "optionD"
	},{
			question: " Which among the following can show polymorphism ?",
			optionA: "Overloading &&",
			optionB: "Overloading <<",
			optionC: "Overloading ||",
			optionD: "Overloading +=",
			correctOption: "optionB"
	},{
			question: "Which among the following represents correct constructor?",
			optionA: "–classname()",
			optionB: " classname()",
			optionC: "()classname",
			optionD: "~classname()",
			correctOption: "optionB"
	},{
			question: " Which access specifier is usually used for data members of a class?",
			optionA: "Protected",
			optionB: "Private",
			optionC: "Public",
			optionD: "Default",
			correctOption: "optionB"
	},{
			question: `" How to access data members of a class?`,
			optionA: "Dot, arrow or direct call",
			optionB: "Dot operator",
			optionC: "Arrow operator",
			optionD: "Dot or arrow as required",
			correctOption: "optionD"
	},{
			question: "Which feature of OOP reduces the use of nested classes?",
			optionA: "Inheritance",
			optionB: "Binding",
			optionC: " Abstraction",
			optionD: "Encapsulation",
			correctOption: "optionA"
	},{
			question: "A circular linked list can be used for?",
			optionA: " Stack",
			optionB: "Queue",
			optionC: "Both Stack & Queue",
			optionD: "Neither Stack or Queue",
			correctOption: "optionC"
	},{
			question: "Which of the following algorithm is not stable?",
			optionA: " Bubble Sort",
			optionB: " Quick Sort",
			optionC: " Merge Sort",
			optionD: "Insertion Sort",
			correctOption: "optionB"
	},{
			question: "Quick sort running time depends on the selection of?",
			optionA: "size of array",
			optionB: "sequence of values",
			optionC: "pivot element",
			optionD: "none of the above!",
			correctOption: "optionC"
	},{
			question: " Which of the following is linear data structure ?",
			optionA: "Trees",
			optionB: "Graphs",
			optionC: "Arrays",
			optionD: "None of these",
			correctOption: "optionC"
	},{
			question: "Which of the following is non-linear data structure ?",
			optionA: "Array",
			optionB: "Linked lists",
			optionC: " Stacks",
			optionD: "None of these",
			correctOption: "optionD"
	},{
			question: "Queue is based on which principle ?",
			optionA: "FIFO",
			optionB: "LIFO",
			optionC: "pop",
			optionD: "None of these",
			correctOption: "optionA"
	},{
			question: " Data Structure that allows fast search within an ordered sequence of elements is called? ",
			optionA: "Skip list",
			optionB: " list",
			optionC: "Array",
			optionD: "None of these",
			correctOption: "optionA"
	},{
			question: "User defined data type is also called? ",
			optionA: "Primitive",
			optionB: "Non-primitive",
			optionC: "Identifier",
			optionD: " None of these",
			correctOption: "optionB"
	},{
			question: "When the data structure is combined with its operation then, data structure is known as  ?",
			optionA: "Topology",
			optionB: "Data Structure",
			optionC: "Abstract Data Type",
			optionD: "None of these",
			correctOption: "optionC"
	},{
			question: " A function which calls itself is called ?",
			optionA: "Iteration",
			optionB: "Algorithm",
			optionC: "Recursion",
			optionD: " none of these",
			correctOption: "optionC"
	},{
			question: "A linear collection of data elements where the linear node is given by means of pointer is called ?",
			optionA: " Linked list",
			optionB: "Skip list",
			optionC: "Node",
			optionD: " None of these",
			correctOption: "optionA"
	},{
			question: "When new data are to be inserted into a data structure , but there is no available space, this situation is usually called?",
			optionA: " Housefull",
			optionB: "Underflow",
			optionC: "Overflow",
			optionD: "None of these",
			correctOption: "optionC"
	},{
			question: " Minimum how many stacks are needed to implement a queue ?",
			optionA: "1",
			optionB: "12",
			optionC: "2",
			optionD: "9",
			correctOption: "optionC"
	},{
			question: " A data structure in which elements can be inserted or deleted at/from both the ends but not in the middle is??",
			optionA: "Queue",
			optionB: "Circular queue",
			optionC: "Dequeue",
			optionD: "Priority queue",
			correctOption: "optionC"
	}
]

let shuffledQuestions = []; 
const questionsCountByPeople = 10;
// const questionsCountByPeople = 3;
const questionsCount = questionsCountByPeople - 1;
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

window.addEventListener('load', () =>  {
	document.querySelectorAll('.questions-count').forEach(element => {
		element.textContent = questionsCount + 1;
		// element.textContent = questionsCountByPeople;
	});
});

function handleQuestions() {
  while(shuffledQuestions.length <= questionsCount) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    // let random = questions[Math.floor(Math.random() * 10)];
    // let random = questions[Math.floor(Math.random() * 23)];
    if(!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

function NextQuestion(index) {
  handleQuestions();
  // console.log(index);
  const currentQuestion = shuffledQuestions[index];
  // document.getElementById("question-number").innerHTML = '1';
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  // document.getElementById("player-score").innerHTML = '0';
  // document.getElementById("display-question").innerHTML = 'How many days makes a week ?';
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  // document.getElementById("option-one-label").innerHTML = '10 days';
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  // document.getElementById("option-two-label").innerHTML = '14 days';
  // document.getElementById("option-three-label").innerHTML = '17 days';
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  // document.getElementById("option-four-label").innerHTML = '22 days';
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber];
  const currentQuestionAnswer = currentQuestion.correctOption;
  const options = document.getElementsByName('option');
  let correctOption = null;
  options.forEach(option => {
    if(option.value === currentQuestionAnswer) {
      correctOption = option.labels[0].id;
    }
  });
  
  // if(options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked === false) {
  //   document.getElementById("option-modal").style.display = 'flex';
  // }

  options.forEach(option => {
    if(option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.background = '#63ff3f';
      playerScore++;
      indexNumber++;
      setTimeout(function() {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.background = '#ff6363';
      document.getElementById(correctOption).style.background = '#63ff3f';
      wrongAttempt++;
      indexNumber++;
      setTimeout(function() {
        questionNumber++;
      }, 1000);
    }
  });
}

function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  setTimeout(() => {
    if (indexNumber <= questionsCount) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

function resetOptionBackground() {
  const options = document.getElementsByName('option');
  options.forEach(option => {
    document.getElementById(option.labels[0].id).style.background = '#ffffff00';
  });
}

function unCheckRadioButtons() {
  const options = document.getElementsByName('option');
  for(let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function handleEndGame() {
  let remark = null;
  let remarkColor = null;
  if(playerScore <= questionsCountByPeople * 0.3) {
    remark = "Bad Grades, keep practicing";
    remarkColor = 'red';
  } else if (playerScore > questionsCountByPeople * 0.3 && playerScore <= questionsCountByPeople * 0.7) {
    remark = "Average Grades, You can do better";
    // remarkColor = 'red';
    remarkColor = 'orange';
  } else if (playerScore > questionsCountByPeople * 0.7) {
    remark = 'Excellent, keep the good work going';
    remarkColor = 'green';
  }
  const playerGrade = (playerScore / questionsCountByPeople) * 100;
  document.getElementById('remarks').innerHTML = remark;
  document.getElementById('remarks').style.color = remarkColor;
  document.getElementById('grade-percentage').innerHTML = playerGrade.toFixed(0);
  document.getElementById('wrong-answers').innerHTML = wrongAttempt;
  document.getElementById('right-answers').innerHTML = playerScore;
  document.getElementById('score-modal').style.display = 'flex';
  document.getElementById('btn-continue').innerText = 'Restart';
}

function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  // NextQuestion(0);
  document.getElementById('score-modal').style.display = 'none';
}

function closeOptionModal() {
  document.getElementById('option-modal').style.display = 'none';
}