import React from 'react';
import HornedBeast from './HornedBeast.js';

class App extends React.Component {
  render(){
    return (
      <>
      <header>
        <h1>Horned Beasts Here!</h1>
      </header>
      <main>
        <HornedBeast src="https://via.placeholder.com/150" alt="A picture of the flabby beast" name="Scary Horn Flab" description="The scariest flabbiest thing ever known to man. Experts said they don't know why its so flabby or why it has horns. It is just in it's nature to be flabby and have a ton of horns. Pretty wild."/>
        <HornedBeast src="https://via.placeholder.com/150" alt="A picture of the mobster beast" name="Horned Mobster" description="This mobster has been lurking the wilds of the rainforest for years. Using their horns they hold other animals up for their hard earned food and also threaten them for protection with their wild horns. They are known and feared by other animals for their rackateering and extortion behaviors."/>
      </main>
      <footer>Author: Cody De La Torre</footer>
      </>
    )
  }
}

export default App;
