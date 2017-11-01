import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  isPoemValid = (poem) => {
    let poemSplit = poem.split("\n")
    let lineTotal = poemSplit.length === 3 ? true : false
    let wordCount = poemSplit[0].trim().split(" ").length === 5 && poemSplit[1].trim().split(" ").length === 3 && poemSplit[2].trim().split(" ").length === 5 ? true : false

    if(lineTotal && wordCount){
      return true
    } else {
      return false
    }
  }

  handlePoem = (event) => {
    this.setState({
      value: event.target.value,
      valid: this.isPoemValid(event.target.value)
    })

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value ={this.state.value}
          onChange={this.handlePoem}
        />
        {this.state.valid ? null : <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
