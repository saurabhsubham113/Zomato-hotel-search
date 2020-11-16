import React, { Component } from 'react';
import './searchbar.style.css';
import API from '../../Axios/API';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            cuisine: '',
            entityId: '',
            entityType: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { entityId, entityType, cuisine } = this.state

        API.getSearch(entityId, entityType, cuisine)
        .then(data => { 
            console.log(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    getLocationData = () => {
        API.getLocation(this.state.location)
        .then(data => {
            const {entity_type,entity_id} = data.location_suggestions[0]
            
            this.setState({
                entityId:entity_id,
                entityType:entity_type
            })
            
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="search-bar">
                <form className="search-bar-form" onSubmit={this.handleSubmit}>
                    <input
                        className="location"
                        type="text"
                        name="location"
                        placeholder="Enter your current location"
                        onChange={this.handleChange}
                        onBlur={this.getLocationData}
                    />
                    <input
                        className="cuisine"
                        type="text"
                        name="cuisine"
                        placeholder="search for a cuisine or a Dish"
                        onChange={this.handleChange}
                    />
                    <button type="submit" >search</button>
                </form>
            </div>
        )
    }
}
