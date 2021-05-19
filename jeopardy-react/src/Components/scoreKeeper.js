import React from 'react'; import './display.css'

class Score extends React.Component{
  constructor(prop){
    super(prop);

    this.state = {score:0}

      this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
          this.reset = this.reset.bind(this);
  }
  increase = () =>{
    this.setState({
      score: this.state.score + 100
    })
    console.log(this.state.score)
  }
  decrease = () => {
    this.setState({
      score: this.state.score - 100
    })
    console.log(this.state.score)
  }
  reset = () => {
    this.setState({
      score:this.state.score = 0
    })
  }

  render(){
    return (
      <div>
        <div className='scoring-container'>
          <div>
          <button className='increase-btn btn' onClick={this.increase}>+100</button>
          </div>
          <div className='scorenumber-container'><h2>{this.state.score}</h2></div>
          <div><button className='decrease-btn btn' onClick={this.decrease}>-100</button></div>
        </div>
        <div className='reset-container'><button className='reset-btn btn' onClick={this.reset}>Reset Score!</button></div>
      </div>
    )
  }
}

export default Score;
