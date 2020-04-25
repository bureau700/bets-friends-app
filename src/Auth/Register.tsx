import React from 'react';
import styled from 'styled-components/native';

import { Text, Picker } from 'react-native';
import { useRootStore } from '../shared/store';
import { useI18n } from '../shared/lib/i18n/localization';

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  padding: 0 10px;
  width: 80%;
`;

export const RegisterScreen = () => {
  const { i18nStore } = useRootStore();
  const { tr, setLanguage } = useI18n();

  return (
    <Page>
      <Text>
        {tr('Language')}: {i18nStore.language.languageTag}
      </Text>
      <Input
        placeholder={tr('Username')}
        onChangeText={(value: string) => console.log(value)}
      />
      <Input
        placeholder={tr('Password')}
        onChangeText={(value: string) => console.log(value)}
      />
      <Input
        placeholder={tr('Password')}
        onChangeText={(value: string) => console.log(value)}
      />

      <Picker
        style={{ width: '50%' }}
        selectedValue={i18nStore.language.languageTag}
        onValueChange={(itemValue) => {
          setLanguage({ languageTag: itemValue });
        }}>
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="English" value="en" />
      </Picker>
    </Page>
  );
};
