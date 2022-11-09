import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    };
  }

  handleFav = () => {
    this.setState({
      favorite: this.state.favorite + 1
    }
    );
  };

  render() {
    console.log(this.state.favorite);
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src} alt={this.props.alt} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" onClick={this.handleFav}>Like</Button>
            <div>💕Faved: {this.state.favorite} </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
