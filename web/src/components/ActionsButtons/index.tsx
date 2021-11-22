import React, { useCallback } from 'react';
import useContextMachine from '../../context/hooks/useContextMachine';
import Swal from 'sweetalert2';
import maskMoney from '../../utils/maskMoney';
import httpAxios from '../../services/axios';
import IResponse from '../../services/types/IResponse';
import ERROR_CODE from './constants/ERROR_CODE';

const ActionsButtons: React.FC = ()=>{
  const {
    resetValues,
    handleSubtractSelectedBallots,
    selectedCandy,
    selectedBallots,
    resetMachine,
    sumSelectedBallots,
    changeOfMoney
  } = useContextMachine();

  const handleConfirmation = useCallback(()=>{
    if(Object.keys(selectedCandy).length) {
      if(selectedCandy.value > sumSelectedBallots) {
        Swal.fire({
          icon: 'warning',
          title: 'Saldo insuficiente'
        });
      }else {
        httpAxios.post<IResponse>('/maquina',{
          entrada: `${selectedBallots.join('')}${selectedCandy.id}`
        }).then(({ data })=>{
          if(data.doce === ERROR_CODE) {
            Swal.fire({
              icon: 'error',
              title: 'Valor inválido',
              text: 'Por favor, selecione um doce e ensira valores válidos!'
            });
          }else {
            Swal.fire({
              icon: 'success',
              title: 'Compra realizada com sucesso!',
              html: `
                <div class="image-response">
                  <img src="${selectedCandy.image}" alt="${selectedCandy.label}" />
                </div>
                <p>
                Muito obrigado por comprar o doce <strong>${selectedCandy.label}</strong> no valor de ${maskMoney(selectedCandy.value)}<br/>
                <strong>Seu troco:</strong> ${maskMoney(changeOfMoney)}
                </p>
                `
            }).then(()=> resetMachine());
          }
        });
      }
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Selecione um doce',
        text: 'Por favor, selecione um doce!'
      });
    }
  }, [selectedCandy, selectedBallots, resetMachine, sumSelectedBallots, changeOfMoney]);

  return(
    <div className="actions-buttons">
      <button className="btn-clean" onClick={resetValues}>
        Limpar
      </button>
      <button className="btn-correct" onClick={handleSubtractSelectedBallots}>
        Corrigir
      </button>
      <button className="btn-confirm" onClick={handleConfirmation}>
        Confirmar
      </button>
    </div>
  );
};

export default ActionsButtons;