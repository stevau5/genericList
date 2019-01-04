import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


//create shopping list class

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs'},
      { id: uuid(), name: 'Milk'},
      { id: uuid(), name: 'Chicken'},
      { id: uuid(), name: 'Water'},
    ]
  }

  render() {
    //below is called destructuring, whatever items is inside the state, it is
    //pulled out.
    const { items } = this.state

    return (
    <Container>
      <Button
        color = "dark"
        style = {{marginBottom: '2rem'}}
        onClick = { () => {
          const name = prompt('Enter Item');
          if(name){
            this.setState(state => ({
              items: [...state.items, { id: uuid(), name }]
            }));
          }
        }}
      > Add Item </Button>

    </Container>
  );

  }
}

export default ShoppingList;
