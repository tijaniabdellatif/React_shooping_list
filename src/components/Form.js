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
      <input type="number" placeholder="Quantity" value={this.state.quantity}

       onChange={ (event) => this.setState({quantity:event.target.value})} />

      <input type="text" placeholder="Items" value={this.state.name} 

      onChange = {
          (event) => this.setState({
              name: event.target.value
          })
      }
      />

      <button type="submit">ADD</button>

     </form>


    </div>
 );
    }

   
}

export default Form;