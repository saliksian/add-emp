import React from 'react';
import "../App.css"

export default function Button(props) {
  return (
    <div>
        <button className={`${props.cname}`} onClick={props.onClick}>{props.Action}</button>
    </div>
  )
}
