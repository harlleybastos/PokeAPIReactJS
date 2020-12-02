import styled from 'styled-components';
import pokeballLoading from '../../../assets/img/pokeballLoading.gif';

export const PokeballLoading = styled.img.attrs({
  src: `${pokeballLoading}`,
})`
  position:absolute;
  left:25%;
`;
