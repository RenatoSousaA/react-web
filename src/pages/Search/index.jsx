import React, { Component } from 'react';
import Button from '../../components/Button'
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
        };
    }

    onSearch = (event) => {
        const { value } = event.currentTarget;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results,
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    renderItem(item) {
        return (
            <li key={`item_${item.id}`}>
                {item.title}
                <Button label="Abrir o produto" handleClick={ () => (alert('Alert')) } />
            </li>
        );
    }

    render() {
        return (
            <div>
                <input style={{width: '100%'}} type="text" onChange={this.onSearch} />
                <div>
                    <ul>
                        {this.state.results.map(this.renderItem)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Search;