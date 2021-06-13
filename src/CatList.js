// write your CatList component here

import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    const imgs=this.props.catPics.map(catPics=> <img src={catPics}/>)
    return (
      <div>
        {imgs}
      </div>
    )
  }
}
