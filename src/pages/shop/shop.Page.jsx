import React from 'react';
import CollectionsOverview from "./collections-overview/collections-overview.component.jsx";
import {Route} from "react-router-dom"
import{firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import CollectionPage from "../collection/collectionPage"
import {connect} from "react-redux"
import {updateCollections} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const collectionRef=firestore.collection("collections")
        collectionRef.onSnapshot(async snapshot =>{
            convertCollectionsSnapshotToMap(snapshot)
        })
    }

    render() {
        const {match} = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
};



export default connect(null,null)(ShopPage);