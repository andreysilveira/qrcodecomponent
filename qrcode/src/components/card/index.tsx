import React from 'react';
import { Qr } from "../qr";
import { Subtitle } from '../subtitle';
import { Title } from '../title';
import { Container, Text } from "./styles";

export function Card() {
    return (
        <>
          <Container>
            <Qr />
            <Text>
              <Title title="Improve your front-end skills by building projects"/>
              <Subtitle subtitle={'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'}/>
            </Text>
          </Container>
        </>
    )
}