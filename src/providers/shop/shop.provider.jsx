import React, { createContext, useState, useEffect } from "react";

import SHOP_DATA from "./shop.data";

import { selectCollectionsForPreview } from './shop.utils';

export const ShopContext = createContext({
    collections: {},
    collectionsForPreview: []
});

const ShopProvider = ({ children }) => {
    const [collections, setCollections] = useState(SHOP_DATA);
    const [collectionsForPreview, setCollectionsForPreview] = useState([]);

    useEffect(() => {
        setCollectionsForPreview(selectCollectionsForPreview(collections))
    }, [collections]);

    return(
        <ShopContext.Provider
        value={{
            collections,
            collectionsForPreview
        }}>
            { children }
        </ShopContext.Provider>
    );
};

export default ShopProvider;