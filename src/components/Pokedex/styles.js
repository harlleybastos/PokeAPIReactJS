import styled from 'styled-components';

export const PokeList = styled.div`

  flex: 1;
  justify-content: center;
  position: relative;
  flex-flow: column;
  padding: 50px;
  display: flex;

  ul{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 3fr));
  grid-gap: 20px;
  }

`;
