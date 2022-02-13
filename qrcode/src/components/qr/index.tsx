import React from "react";
import { Container } from "./styles"
import QRcode from "qrcode.react";

export const Qr = () => {

    return (
        <>
          <Container className="uiui">
          <QRcode 
            value={"https://www.linkedin.com/in/andreysilveira/"}
            size={200}
            bgColor={"#3e52a3"} 
            fgColor={"#FFFFFF"}
            level={'Q'}
            includeMargin={false}
            
            />
          </Container>
        </>
    )
}