
import { createSelector } from 'reselect';

const CollectionIdMap = {
    hats:1,
    jackets:3,
    mens:5,
    sneakers:2,
    womens: 4

}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection =>collection.id=== CollectionIdMap[collectionUrlParam])
    );


// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => collections[collectionUrlParam]
//     );