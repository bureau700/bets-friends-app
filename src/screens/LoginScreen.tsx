import React from 'react';
import styled from 'styled-components/native';
import XInput from '../components/XInput';
import { useI18n } from '../shared/lib/i18n/localization';

const Page = styled.View`
  background-color: ${(props) => props.theme.Colors.background};
  padding: ${(props) => props.theme.Metrics.regularMargin}px;

  flex: 1;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.Colors.text};
`;

export default function LoginScreen() {
  const { tr } = useI18n();

  return (
    <Page>
      <Text>Ceci est un test</Text>
      <XInput placeholder={tr('Login')} />
      <XInput placeholder={tr('Password')} />
    </Page>
  );
}
