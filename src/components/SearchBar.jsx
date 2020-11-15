import React, { Component } from 'react'
import API from '../Axios/API';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            cuisine: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        API.getLocation(this.state.location)
            .then(data => {
                console.log(data)
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter your current location"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="cuisine"
                        placeholder="search for a Restraunt, cuisine or a Dish"
                        onChange={this.handleChange}
                    />
                    <button type="submit" >search</button>
                </form>
            </div>
        )
    }
}
