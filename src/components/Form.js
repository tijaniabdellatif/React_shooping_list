import React from 'react'


class Form extends React.Component {
     
    state={
      name : '',
     quantity:0
    }; //donné saisi par l user
    

    render(){

        return (

    <div>
     <h3>Add Items to Buy</h3>

     <form>
      <input type="number" placeholder="Quantity"/>
      <input type="text" placeholder="Items" />
      <button type="submit">ADD</button>

     </form>


    </div>
 );
    }
}

export default Form;