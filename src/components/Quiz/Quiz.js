
import React from 'react';
import './Quiz.css';

const cardData = [{
  front: {
    question: 'Your son',
    hint: 'family'
  },
  back: {
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
    answer: 'Charles',
    description: 'Charles is your son'
  }
},
{
  front: {
    question: "Your granddaughter's name",
    hint: 'family'
  },
  back: {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    answer: 'Jane',
    description: 'Jane is your granddaughter'
  }
},
{
  front: {
    question: 'Daughter',
    hint: 'family'
  },
  back: {
    image: 'https://images.pexels.com/photos/5444907/pexels-photo-5444907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    answer: 'Rachel',
    description: 'Rachel is your daughter'
  }
},
{
  front: {
    question: "Monica's baby",
    hint: "your daughter's baby"
  },
  back: {
    image: 'https://images.unsplash.com/photo-1481091634437-564d831a73df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80',
    answer: 'Ethan',
    description: 'Ethan is your grandson'
  }
},
{
  front: {
    question: 'Your son',
    hint: 'family'
  },
  back: {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    answer: 'Mike',
    description: 'Mike is your son'
  }
},
{
  front: {
    question: 'your sister',
    hint: 'family'
  },
  back: {
    image: 'https://images.pexels.com/photos/2269739/pexels-photo-2269739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    answer: 'Sarah',
    description: 'Sarah is your sister'
  }
},
{
  front: {
    question: 'Your wife',
    hint: 'family'
  },
  back: {
    image: 'https://images.pexels.com/photos/5698143/pexels-photo-5698143.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    answer: 'Beth',
    description: 'Beth is your wife'
  }
}];
            
            
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: []
    };
  }

  componentDidMount() {
    this.setState({ cardData: cardData });
  }

  shuffleBackward = () => {
    const { cardData } = this.state;
    const newCardData = [cardData[6], ...cardData.slice(0, 6)];
    this.setState({ cardData: newCardData });
  }

  shuffleForward = () => {
    const { cardData } = this.state;
    const newCardData = [...cardData.slice(1), cardData[0]];
    this.setState({ cardData: newCardData });
  }

  render() {
    return (
      <div className='Quiz'>
        <h1 className='title'>
          Quiz
        </h1>
        <p className='sub-title'>
          An interactive flash cards quiz for memory retention activity.
        </p>
        <div className='card-list'>
          {this.state.cardData.map((card, index) => <Card key={index} index={index} front={card.front} back={card.back} />)}
        </div>
        <div className='buttons'>
          <button onClick={() => this.shuffleBackward()}>
            &lt;
          </button>
          <button onClick={() => this.shuffleForward()}>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      flipped: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.flipped === true) {
      this.setState({ flipped: false });
    }
  }

  flipCard = () => {
    if (this.props.index === 0) {
      this.setState({ flipped: !this.state.flipped });
    }
  }

  cardClass = () => this.state.flipped ? 'Card -back' : 'Card -front';

  render() {
    return (
      <div className={this.cardClass()} onClick={() => this.flipCard()}>
        {!this.state.flipped ?
          <div className='front'>
            <div className='image'>
              <img src={this.props.back.image} />
            </div>
            <h5 className='question'>
              {this.props.front.question}
            </h5>
            <p className='hint'>
              <span>Hint:</span> {this.props.front.hint}
            </p>
          </div>
          :
          <div className='back'>
            <div className='image'>
              <img src={this.props.back.image} />
            </div>
            <h5 className='answer'>
              {this.props.back.answer}
            </h5>
            <p className='description'>
              {this.props.back.description}
            </p>
          </div>
        }
      </div>
    );
  }
}

export default Quiz;