import React from 'react';
import AddFlower from './AddFlower';


class Inventory extends React.Component {
    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {/* Props is used to pass 'things' down.  the state of a component will become the props of a child component */}
                {/* Props are passed to the child withing the render method of the parent as the second argument to React.CreateElement */}
                {/*  or JSX */}
                <AddFlower AddFlower={this.props.AddFlower} />                
            </div>

        )
    }
}

export default Inventory;