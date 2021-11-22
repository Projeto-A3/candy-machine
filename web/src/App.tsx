import React from 'react';
import Keyboards from './components/Keyboards';
import Machine from './components/Machine';
import Lcd from './components/Lcd';
import './styles/main.scss';
import ActionsButtons from './components/ActionsButtons';
import useContextMachine from './context/hooks/useContextMachine';
import maskMoney from './utils/maskMoney';

function App() {
  const { sumSelectedBallots, changeOfMoney } = useContextMachine();
  return (
    <div className="App">
      <div className="container">
        <div className="layout">
          <div className="box-machine">
            <Machine />
          </div>
          <div className="box-keyboards">
            <Lcd title="Total" text={maskMoney(sumSelectedBallots)} />
            <Lcd title="Troco" text={maskMoney(changeOfMoney)} />
            <Keyboards />
            <ActionsButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
