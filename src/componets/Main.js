import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allBeasts: this.props.data,
      filteredBeasts: this.props.data
    }

  }

  handleSubmit = (event) => {
    console.log('hi');
    let numHorns = parseInt(event.target.name);
    console.log(numHorns);
    let gallery = this.state.allBeasts;

    if (numHorns) {
      gallery = this.state.allBeasts.filter((beast) => beast.horns === numHorns);
      console.log(gallery);
    }
    this.setState({ filteredBeasts: gallery });

  }


  render() {
    let beastArr = this.state.filteredBeasts.map((beast, idx) => {
      return <HornedBeast
        src={beast.image_url}
        alt={beast.description}
        name={beast.title}
        description={beast.description}
        key={idx}
        handleOpenModal={() => this.props.handleOpenModal(beast)}
      />
    });
    return (
      <>
        <main>
            <Form>
              <Form.Group>
                <DropdownButton id="dropdown-basic-button" title="Filter Beasts by Horns">
                  <Dropdown.Item onClick={this.handleSubmit} name="All">All</Dropdown.Item>
                  <Dropdown.Item onClick={this.handleSubmit} name="1">1</Dropdown.Item>
                  <Dropdown.Item onClick={this.handleSubmit} name="2">2</Dropdown.Item>
                  <Dropdown.Item onClick={this.handleSubmit} name="3">3</Dropdown.Item>
                  <Dropdown.Item onClick={this.handleSubmit} name="100">100</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </Form>
          {beastArr}
        </main>
      </>
    )
  }
}

export default Main;
