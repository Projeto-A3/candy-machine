import React, { useEffect, useRef } from 'react';
import Candy from "./Candy";
import useContextMachine from "../../context/hooks/useContextMachine";

const Machine: React.FC = ()=>{
  const { candyList, handleSelectedCandy, selectedCandy } = useContextMachine();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(()=>{
    if(!Object.keys(selectedCandy).length) {
      formRef?.current?.reset();
    }
  }, [selectedCandy, formRef]);

  return(
    <div className="machine">
      <div className="content">
        <form ref={formRef}>
          {
            candyList.map((candy, index)=> (
              <Candy
                key={index}
                id={candy.id}
                label={candy.label}
                value={candy.value}
                index={String(index)}
                bgColor={candy.bgColor}
                image={candy.image}
                onChange={handleSelectedCandy}
              />
            ))
          }
        </form>
      </div>
    </div>
  );
};

export default Machine;