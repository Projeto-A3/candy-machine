import React from 'react';
import maskMoney from '../../utils/maskMoney';
import ICandy from './types/ICandy';

interface IPropsCandy extends ICandy {
  onChange: (candy: ICandy)=> void;
}

const Candy: React.FC<IPropsCandy> = (props)=> {
  return (
    <div className="candy">
      <input
        type="radio"
        name="candy"
        value={props.value}
        id={props.index}
        onChange={()=> props.onChange(props)}
      />
      <label htmlFor={props.index} style={{ backgroundColor: props.bgColor }}>
        <img src={props.image} alt={`${props.value}`} />
        <div className="main">
          <span>
            {props.label}
          </span>
          {
            maskMoney(props.value)
          }
        </div>
      </label>
    </div>
  );
};

export default Candy;