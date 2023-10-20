import React from "react";
import styled from "styled-components";

function Ready() {
  return (
    <Container>
      <img
        src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Ready.png?raw=true"
        alt="Readyimage"
      />
    </Container>
  );
}

export default Ready;

const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
