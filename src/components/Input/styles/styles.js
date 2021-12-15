import styled from 'styled-components/native';

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
  margin-bottom: 24px;
`;
