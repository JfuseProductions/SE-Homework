import React from "react";

const PhotoDisplay = (props) => {
  return (
    <div>
      <img className='jeopardyImage 'src={props.jImage}/>
    </div>
  );
};

export default PhotoDisplay;
