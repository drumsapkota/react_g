import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Card = (props) => {
  return(
    <div style={{margin:'1em'}}>
      <img width = "75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft: 10}}>
        <div style={{fontSize:'1.25em', fontWeight:'bold'}}>
        {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
    );
};

let data= [
  {
    name:"Paul O'Shannessy",
    avatar_url:"https://avatars2.githubusercontent.com/u/8445?v=3",
    company:"Facebook"
  },
  {
    name:"Ben Alpert",
    avatar_url:"https://avatars1.githubusercontent.com/u/6820?v=3",
    company:"Facebook"
  }
]

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card name={card.name} company={card.company} avatar_url={card.avatar_url} />)}
    </div>
    );
}

//ReactDOM.render(<Card />,document.getElementById('root'));
export default CardList;
