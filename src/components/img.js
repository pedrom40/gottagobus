import React from 'react';

export default function Img(props) {

  let style;
  if (props.widthSize) {
    style = {
      width: props.widthSize,
      height: props.heightSize
    }
  }
  return <img src={props.srcUrl} alt={props.altText} className="img-responsive" style={style} />
}
