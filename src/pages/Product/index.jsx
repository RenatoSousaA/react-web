import React, { Component } from 'react';
import axios from 'axios';

import Load from '../../components/Load';

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loadActive: true,
            data: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}?attributes=price,initial_quantity,pictures,condition,title`)
            .then((res) => {
                this.setState({data: res.data, loadActive: false})
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Load loadActive={this.state.loadActive} />
                PRODUCT
            </div>
        );
    }
}

export default Product;