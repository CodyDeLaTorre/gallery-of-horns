import React from 'react';
import data from './data.json';
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render() {
    let beastArr = [];
    data.forEach((beast,idx) => {
      beastArr.push(
        <HornedBeast 
        src={beast.image_url}
        alt={beast.description}
        name={beast.title}
        description={beast.description}
        key={idx}
        />)
    })
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
