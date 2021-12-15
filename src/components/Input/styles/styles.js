import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 28px;
`;

export const Input = styled.TextInput`
  height: 56px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-size: ${props => props.theme.sizes.medium};
  color: ${props => props.theme.colors.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 5px;
`;

export const Icon = styled.Image`
  width: ${props => props.theme.sizes.large};
  height: ${props => props.theme.sizes.large};
  background-color: ${props => props.theme.colors.gray3};
`;
