import React, { useCallback } from 'react';

interface IProps {
  text: number;
  callback: (value: number)=> void;
}

const Button: React.FC<IProps> = (props)=>{
  const { text, callback } = props;
  const onClick = useCallback(()=>{
    callback(text);
  }, [text, callback]);

  return(
    <button type="button" onClick={onClick}>
      {props.text.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}
    </button>
  );
};

export default Button;