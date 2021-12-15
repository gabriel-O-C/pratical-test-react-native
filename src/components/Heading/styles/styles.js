import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: ${(props) => props.theme.colors.gray1};
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: ${(props) => props.theme.large};
  font-weight: 900;
`;