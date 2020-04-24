import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const InputWrapper = styled.View`
  background-color: ${(props) => props.theme.Colors.backgroundLighter1};
  border-radius: 3px;
  padding: ${(props) => props.theme.Metrics.tightMargin}px
    ${(props) => props.theme.Metrics.smallerMargin}px;
  margin: 0;
`;

const Input = styled.TextInput`
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.Colors.text};
`;

export default function XInput(props: TextInputProps) {
  return (
    <InputWrapper>
      <Input {...props} />
    </InputWrapper>
  );
}
