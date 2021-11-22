import React from 'react';
import useContextMachine from '../../context/hooks/useContextMachine';
import Button from './button';

const Keyboards: React.FC = ()=>{
  const { ballotsList } = useContextMachine();
  const { handleSelectedBallots } = useContextMachine();

  return(
    <div className="keyboards">
      <div className="buttons">
        {
          ballotsList.map((value, index) => <Button key={index} text={value} callback={handleSelectedBallots} />)
        }
      </div>
    </div>
  );
};

export default Keyboards;