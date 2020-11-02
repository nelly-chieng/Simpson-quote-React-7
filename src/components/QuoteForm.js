import React from 'react';
import './QuoteForm.css'; 

const maxLength = 30;
class QuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            character : ' '
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (event.target.value.length <= maxLength) {
          this.setState({ character: event.target.value });
        }
      }

    render() {
        const maxReached = this.state.character.length >= maxLength;
        const numRemaining = maxLength - this.state.character.length;
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            className={maxReached ? 'length-maximum-reached' : 'length-ok'}
            id="character"
            name="character"
            type="text"
            value = {this.state.character}
            onChange={this.handleChange} 
            />
            <p className="remaining-characters">{numRemaining} characters remaining</p>
            <p>You typed : {this.state.character}</p>
        </form>
        
      );
    }
  }
  
export default QuoteForm;