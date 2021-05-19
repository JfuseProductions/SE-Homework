import React from "react"; import './display.css'
import Score from './scoreKeeper';

class Display extends React.Component {
  constructor() {
    super()
    this.state = {
      question: "",
      answer: "",
      category: "",
      value: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("http://jservice.io/api/random")
      .then((response) => response.json())
      .then((jeopardyData) => {
        this.setState({
          question: jeopardyData[0].question,
          answer: jeopardyData[0].answer,
          category: jeopardyData[0].category.title,
          value: jeopardyData[0].value,
        });
      });
  }

  showAnswer = () => {
    if(this.state.showanswer) {
      this.setState({showanswer:false})
    }
    else(this.setState({showanswer:true}))
  }

  render(){
    return(
      <div>

        <div class='next-question-container'>

            <button className='next-question btn' onClick={this.componentDidMount}>NEXT QUESTION</button>

        </div>

          <div className = 'category-container'>
            <div class='category'>
              <h1>Category!</h1> <p>{this.state.category}</p>
            </div>

              <div class='question'>
                <h1>Question:</h1><p>{this.state.question}</p>
              </div>
          </div>



        <div>
          <Score/>
          <div className='show-answer-container'>
            <button className='show-answerbtn btn'onClick={this.showAnswer}>Answer</button>
              <div className='answerDisplay'>{this.state.showanswer? this.state.answer:" "}</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Display;
