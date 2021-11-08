import React, {Component} from 'react';
// import ShopData from "./shop.data";
// import CollectionPreview from "./preview-collection/preview.component";
import CollectionsOverview from "./collections-overview/collections-overview.component.jsx";
 import {Route} from  "react-router-dom"

import CollectionPage from "../collection/collectionPage"
const ShopPage = ({ match }) => {
    console.log(match, "match")

     return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
         )


};

export default ShopPage;