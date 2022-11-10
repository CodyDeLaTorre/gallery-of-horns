import React from 'react';
import data from '../data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      selectedBeast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({ isModalShown: false })
  }

  handleOpenModal = (beast) => {
    this.setState({ isModalShown: true, selectedBeast: beast });
  }


  render() {
    return (
      <>
        <Header />
        <Main handleOpenModal={this.handleOpenModal} data={data} />
        <SelectedBeast isModalShown={this.state.isModalShown} selectedBeast={this.state.selectedBeast} handleCloseModal={this.handleCloseModal}></SelectedBeast>
        <Footer />
      </>
    )
  }
}

export default App;
