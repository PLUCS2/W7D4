import React from 'react'; 

class ItemDetail extends React.Component {

  constructor(props){
    super(props);
    this.item = this.props.item;
  }


  render(){
    debugger
    return (
    <>
    <h1>{this.item.name}</h1>

    </>
    )
  }
}

export default ItemDetail; 