import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count < 3) {
      return <button onClick={this.handleClick} className="button1">Hot Button</button>

    } else if (this.state.count >= 3 && this.state.count <= 6) {
      return <button onClick={this.handleClick} className="button2">Hot Button</button>

    } else if (this.state.count >= 6 && this.state.count <= 9) {
      return <button onClick={this.handleClick} className="button3">Hot Button</button>

    } else if (this.state.count >= 9 && this.state.count <= 12) {
      return <button onClick={this.handleClick} className="button4">Hot Button</button>

    } else if (this.state.count >= 12 && this.state.count <= 15) {
      return <button onClick={this.handleClick} className="button5">Hot Button</button>

    } else {
      return <button onClick={this.handleClick} className="button6">Hot Button</button>
    }
  }
};


export default HotButton;
