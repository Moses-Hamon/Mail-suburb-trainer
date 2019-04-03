import React, { Component } from 'react';

function Text(props) {
  return (
    <div>
        <h1>Hello, {props.name}</h1>
        {props.names.map(name => <h2>{name}</h2>)}
    </div>
  )
}

export default Text;