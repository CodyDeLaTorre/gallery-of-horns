import React from 'react';

class HornedBeast extends React.Component {
  render () {
    return (
    <>
      <article>
        <img src={this.props.src} alt={this.props.alt}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </article>
    </>
  )
  }
}

export default HornedBeast;
