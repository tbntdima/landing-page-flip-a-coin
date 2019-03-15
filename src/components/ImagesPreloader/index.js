import React from 'react';

const ImagesPreloader = props => {
  const imagesList = props.imagesList.reduce((list, image, index) => {
    if (props.imagesList.length - 1 === index)
      return `${list}url('${image}')`;
    else
      return `${list}url('${image}'),`;
  }, '');

  const style = {
    position: 'absolute',
    width: 0, height: 0,
    background: imagesList
  }

  return (
    <div style={style}></div>
  );
}

export default ImagesPreloader;
