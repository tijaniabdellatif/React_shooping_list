import React from 'react';
import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component{

    render(){

        return(
            <diV>
            <h3>Item lists</h3>
            <Form />
            <ItemList />
            </diV>
            
        );
    }
}

export default App;