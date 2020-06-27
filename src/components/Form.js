import React from 'react'


class Form extends React.Component {
    
    /**
     * use constructor if not using arrow functions on events
     * 
     */
    //  constructor(props){
    //      super(props);
    //      this.handleSubmit=this.handleSubmit.bind(this);
    //  }
    state={
      name : '',
      quantity:0
    }; //donné saisi par l user
    
    handleSubmit = (event) => {

         console.log(this.state);
    };

    render(){

        return (

    <div>
     <h3>Add Items to Buy</h3>

     <form onSubmit={e => e.preventDefault()}>
      <input type="number" placeholder="Quantity" value={this.state.quantity}

       onChange={ (event) => this.setState({quantity:event.target.value})} />

      <input type="text" placeholder="Items" value={this.state.name} 

      onChange = {
          (event) => this.setState({
              name: event.target.value
          })
      }
      />

      <button type="submit" onClick={this.handleSubmit}>ADD</button>

     </form>


    </div>
 );
    }

   
}

export default Form;