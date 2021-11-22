import React from 'react';

interface IProps {
  title: string;
  text: string;
}

const Lcd: React.FC<IProps> = (props)=>{
  return(
    <>
    <div className="container-lcd">
      <p>
        {props.title}
      </p>
      <div className="lcd">
        {
          props.text ? props.text : '0000'
        }
      </div>
    </div>
    </>
  );
};

export default Lcd;