import { Container, PaymentCard, AbaQrCode, AbaCreditCard } from "./styles";
import { useState } from "react";

import { MdPix, MdCreditCard  } from "react-icons/md";

import qrcode from '../../assets/qrcode.svg'

import { Button } from '../Button'


export function PaymentQrCode() {

  const [abaAberta, setAbaAberta] = useState("pix");

  const trocarAba = (novaAba) => {
    setAbaAberta(novaAba);
  };

  return(
    <Container>

  

        <PaymentCard>
          <div className="menuButtons">
            <button className="buttonPix" onClick={() => trocarAba("pix")}> <MdPix /> Pix</button>
            <button className="buttonCreditCard" onClick={() => trocarAba("creditCard")}> <MdCreditCard /> Cartão</button>
          </div>

          {abaAberta === "pix" && (
            <AbaQrCode>
              <img src={qrcode} alt="" />
            </AbaQrCode>
          )}

          {abaAberta === "creditCard" && (
            <AbaCreditCard>
              <label htmlFor="">Número do Cartão</label>
              <input 
                type="text" 
                placeholder="0000 0000 0000 0000"
              />

              <div className="inputsBox">
                <div className="validity">
                  <label htmlFor="">Validade</label>
                  <input 
                    type="text" 
                    placeholder="04/25"
                  />
                </div>

                <div className="cvc">
                  <label htmlFor="">CVC</label>
                  <input 
                    type="text" 
                    placeholder="000"
                  />
                </div>

              </div>

              <Button title="Finalizar pagamento"/>

            </AbaCreditCard>
          )}
        </PaymentCard>
    

    </Container>
  )
}
