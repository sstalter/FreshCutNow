import React from 'react';
import { GetName } from '../helpers';

// use es6 classes.
// React uses html push state.  Change the url but does not refresh the browser!
class VendorPicker extends React.Component {
    // constructor(){
    //     // super creates the react component base.
    //     // then allows us to add our custom methods
    //     super();

    //     // binds itself to the VendorPicker class which will allow to use this in other methods within this class.
    //     this.GoToVendor = this.GoToVendor.bind(this);
    // }

    GoToVendor(event) {
        event.preventDefault();

        // use $r to get active react element
        let storeId = this.storeInput.defaultValue;
        let route = `vendor/${storeId}`;
        this.context.router.transitionTo(route);
        // Let React handle the DOM
        // Grab text from box
        // transition to vendor/:vendorId
    }

    // render() is bound to the class we extend from React.Component
    render() {
        return (
            // <form className="vendorselector" onSubmit={this.GoToVendor}>

            // (e) => this.GoToVendor(e)} - this arrow function replaces line above and constructor super() and bind
            // in constructor above
            <form className="vendorselector" onSubmit={(e) => this.GoToVendor(e)}>
                { /* Vendor - can only return 1 parent*/ }
                <h2>Please enter a vendor</h2>

                { /* refs are used to get reference to a DOM node or an instance of a component in a React application. /}
                { /* Refs return the node we are referencing. */}
                { /* React is moving from string ref's to function refs*/}
                { /* refs can use callbacks*/}
                <input type="text" required placeholder="Vendor" defaultValue={GetName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit vendor</button>
            </form>
        )
    }
}


// make the router from index.js avalaible
// The vendor picker is expection a router.  React says ok.
VendorPicker.contextTypes = {
    router : React.PropTypes.object
}

export default VendorPicker;