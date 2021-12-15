import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.lato};
  font-weight: 900;
  font-size: ${props => props.theme.sizes.medium_large};
  color: ${props => props.theme.colors.gray1};
`;
