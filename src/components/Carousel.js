import React from 'react';

import Card from '../components/Card';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import p5js from '../assets/images/p5js.png';
import restest from '../assets/images/restest.png';
import click from '../assets/images/click.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'P5js',
                subTitle: 'An Enviroment for designers',
                imgSrc: p5js,
                link: 'https://editor.p5js.org/beerona/sketches/FCnAtutgY',
                selected: false
            },
            {
                id: 1,
                title: 'Bronagh Gallagher',
                subTitle: 'frequency test',
                imgSrc: click,
                link: 'https://editor.p5js.org/beerona/present/LQeJDeoDi',
                selected: false
            },
            {
                id: 2,
                title: 'hello',
                subTitle: 'other website tests',
                imgSrc: restest,
                link: 'https://bronaghgallagher.github.io/',
                selected: false
            },
        ]
    }
}

handleCardClick = (id, card) => {
  console.log(id);
     let items = [...this.state.items];
     
     items[id].selected = items[id].selected ? false : true;
     items.forEach(item => {
       if(item.id !== id) {
         item.selected = false;
       }
     });

     this.setState({
       items
     });
}

makeItems = (items) =>{
  return items.map(item => {
    return <Card item={item} click={(e => this.handleCardClick(item.id, e))}  key={item.id} />
  })
}


  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around" >
          {this.makeItems(this.state.items)}
          </Row>
        </Container>
    );
  }

}

export default Carousel;