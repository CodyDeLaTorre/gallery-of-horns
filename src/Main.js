import React from 'react';
import HornedBeast from "./componets/HornedBeast";

class Main extends React.Component {
  render() {
    let beastArr = this.props.data.map((beast, idx) => {
      return <HornedBeast
        src={beast.image_url}
        alt={beast.description}
        name={beast.title}
        description={beast.description}
        key={idx}
        handleOpenModal={()=>this.props.handleOpenModal(beast)}
      />
    });
    return (
      <>
        <main>
          {beastArr}
        </main>
      </>
    )
  }
}

export default Main;
