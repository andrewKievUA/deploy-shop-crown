import React, {Component} from 'react';
import ShopData from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview.component";


class ShopPage extends Component {
    constructor(props) {
        super(props);
       this.state= ShopData

    }
    render() {
        const collection = [...this.state.arr]
       // console.log(collection[3].id)


        //console.log({collection},"SHop Page")
        return (
            <div className="shop-page">
                {collection.map(({id, ...otherColletionProps}) =>(
                    <CollectionPreview key={id} {...otherColletionProps}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;