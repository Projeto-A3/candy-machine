import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import ICandy from "../components/Machine/types/ICandy";
import randomColor from "../utils/randomColor";

import kitkat from '../assets/images/kitkat.png';
import garotoChocolate from '../assets/images/garoto-chocolate.png';
import bis from '../assets/images/bis.png';

interface IStates {
  selectedBallots: number[];
  handleSelectedBallots: (value: number) => void;
  selectedCandy: ICandy;
  handleSelectedCandy: (candy: ICandy)=> void,
  sumSelectedBallots: number;
  handleSubtractSelectedBallots: ()=> void;
  resetValues: ()=> void;
  candyList: ICandy[];
  ballotsList: number[];
  changeOfMoney: number;
  resetMachine: ()=> void
};

export const ContextMachine = createContext<IStates>({} as IStates);

export const ContextProviderMachine: React.FC = (props)=>{
  const [selectedBallots, setSelectedBallots] = useState<number[]>([]);
  const [selectedCandy, setSelectedCandy] = useState<ICandy>({} as ICandy);
  const [sumSelectedBallots, setSumSelectedBallots] = useState(0);
  const [changeOfMoney, setChangeOfMoney] = useState(0);

  const candyList = useMemo<ICandy[]>(()=>[
    {
      label: 'KitKat',
      value: 6,
      bgColor: randomColor(),
      image: kitkat,
      id: 'a',
    },
    {
      label: 'BIS',
      value: 7,
      bgColor: randomColor(),
      image: bis,
      id: 'b'
    },
    {
      label: 'Chocolate garoto',
      value: 8,
      bgColor: randomColor(),
      image: garotoChocolate,
      id: 'c'
    }
  ], []);

  const ballotsList = useMemo<number[]>(()=> [1, 2, 5], []);

  const resetMachine = useCallback(()=>{
    setSelectedBallots([]);
    setSelectedCandy({} as ICandy);
    setChangeOfMoney(0);
  }, []);

  const handleSelectedBallots = useCallback((value: number)=> setSelectedBallots([...selectedBallots, value]), [selectedBallots]);

  const handleSubtractSelectedBallots = useCallback(()=> setSelectedBallots(selectedBallots.slice(0, -1)), [selectedBallots]);

  const handleSelectedCandy = useCallback((candy: ICandy)=> setSelectedCandy(candy), []);

  const resetValues = useCallback(()=> {
    setSelectedCandy({} as ICandy);
    setSelectedBallots([]);
  }, []);

  useEffect(()=>{
    setSumSelectedBallots(
      selectedBallots.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    );
  }, [selectedBallots]);

  useEffect(()=>{
    if(selectedCandy && Object.keys(selectedCandy).length) {
      setChangeOfMoney(
        Math.max(0, sumSelectedBallots - selectedCandy.value)
      );
    }
  }, [selectedCandy, sumSelectedBallots]);

  return(
    <ContextMachine.Provider value={{
      selectedBallots,
      selectedCandy,
      sumSelectedBallots,
      candyList,
      ballotsList,
      handleSelectedBallots,
      handleSelectedCandy,
      handleSubtractSelectedBallots,
      resetValues,
      changeOfMoney,
      resetMachine
      }}>
      {props.children}
    </ContextMachine.Provider>
  );
};