import styled from 'styled-components';

export const CardPoke = styled.li`
  justify-content: center;
  position: relative;
  display: flex;
  flex-flow: column;
  min-height: 200px;
  padding: 50px;
  background: #F3F3F3;

  img{
  margin-top: 20px;
  padding:20px;
  width: 100%;
  }

  h1{
    text-align: center;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  justify-content: center;
  font-weight: 400;
  }
`;
