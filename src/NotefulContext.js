import React from 'react';
import dummyStore from './dummy-store.js'

const NotefulContext = React.createContext({
    store: dummyStore,
    addFolder: () => {},
    addNote: () => {}
})



export default NotefulContext;