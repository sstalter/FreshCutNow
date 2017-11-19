import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

//need to share state.  So let's put state on our app component
// React needs to know what state to have.

class App extends React.Component{
    constructor() {
        super();
        this.AddFlower = this.AddFlower.bind(this);
        this.state = {
            flowers: {},
            order: {}
        }
    }

    AddFlower(flower){
        //update our state - copy your current state then update
        // ... is a spread.  Will take every item from the object into flowers.  Takes a copy.
        // add in our new flower
        let flowers = {...this.state.flowers};

        // not in state yet
        flowers[`flower-${Date.now()}`] = flower;
        // can use this
        //this.state.flowers.flowers1 = flower;

        //set state - tells react.  Tell react what state we changed.  First flower is the state we defined in constructor
        // React will then update everything
        // could do -- this.setState({ flowers: flowers})
        this.setState({ flowers });
    }

    
    render() {
        return(
            <div className="freshcutnow">
                <div className="menu">
                    <Header tagline="Fresh flowers" />
                </div>                  
                <Order />
                {/* how do I call AddFlower from a child component.   */}
                <Inventory AddFlower={this.AddFlower} />
            </div>
        )
    }
}

export default App;