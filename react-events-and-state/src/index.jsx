import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <button onClick={ this.handleClick }>Thanks!</button>;
    } else {
      button = <button onClick={ this.handleClick }>Click me!</button>;
    }

    return (
      <div>
        { button }
      </div>
    );
  }
}

const element = <CustomButton />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
