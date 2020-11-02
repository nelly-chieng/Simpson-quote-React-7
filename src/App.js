import React, { Component } from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuote: '',
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')

      .then((response) => response.data)

      .then((data) => {
        console.log(data);
        this.setState({
          newQuote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        <QuoteList />
        <QuoteCard
          key={this.state.newQuote.quote}
          quote={this.state.newQuote.quote}
          image={this.state.newQuote.image}
          character={this.state.newQuote.character}
        />
        <button type="button" onClick={this.getQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
