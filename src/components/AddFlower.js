import React from 'react';

class AddFlower extends React.Component{

    CreateFlower(event){
        event.preventDefault();
        let flower = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            description: this.description.value,
            image: this.image.value
        }
        //console.log(flower);
        this.props.AddFlower(flower);
        this.FlowerForm.reset();
    }


    render() {
        return (
            <form ref={(input) => this.FlowerForm = input} className="FlowerEdit" onSubmit={(e) => this.CreateFlower(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Name" />
                <input ref={(input) => this.price = input} type="text" placeholder="Price" />
                <select ref={(input) => this.status = input}>
                    <option value="available">Fresh cut</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea ref={(input) => this.description = input} type="text" placeholder="Description" />
                <input ref={(input) => this.image = input} type="text" placeholder="Image" />
                <button type="submit">Add flower</button>
            </form>
        )
    }
}

export default AddFlower;   