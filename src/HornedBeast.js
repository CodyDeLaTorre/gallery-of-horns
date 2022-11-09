import React from 'react';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    };
  }

  handleFav= () => {
    this.setState({
      favorite: this.state.favorite + 1}
      );
  };

  render () {
    console.log(this.state.favorite);
    return (
    <>
      <article>
        <img src={this.props.src} alt={this.props.alt}/>
        <div>💕Faved: {this.state.favorite} </div>
        <div id ='button' onClick={this.handleFav}>Like</div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </article>
    </>
  )
  }
}

export default HornedBeast;
