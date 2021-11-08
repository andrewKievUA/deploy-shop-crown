import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

const ShopingArea = () => {
    return (
        <div>
            this is a shoping area
        </div>
    );
};


export default connect(
    mapStateToProps,
)(ShopingArea);