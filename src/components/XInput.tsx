import React, { useState, useMemo } from 'react';
import { TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Outline from './utils/Outline';
import XIcon, { XIconName } from './XIcon';
import XTouchableIcon from './XTouchableIcon';

interface XInputPrivate {
  trailingIcon?: XIconName;
  trailingIconColor?: string;
  onTrailingIconPress?: () => void;
}

export type XInputProps = XInputPrivate & TextInputProps;

const IconWrapper = styled.View`
  margin: ${(props) => props.theme.Metrics.littleMargin}px;
`;

const InputWrapper = styled.View`
  border: 1px ${(props) => props.theme.Colors.formComponent.border} solid;
  border-radius: ${(props) => props.theme.Metrics.formComponent.borderRadius}px;
  flex-direction: row;
  align-items: center;
  height: ${(props) => props.theme.Metrics.formComponent.height}px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin: 0;
  color: ${(props) => props.theme.Colors.text};
  padding: ${(props) => props.theme.Metrics.formComponent.paddingVertical}px
    ${(props) => props.theme.Metrics.formComponent.paddingHorizontal}px;
`;

function Icon({
  trailingIcon,
  trailingIconColor,
  onTrailingIconPress,
}: XInputProps): React.ReactNode | null {
  if (!trailingIcon) return null;

  const color = trailingIconColor || 'black';

  if (onTrailingIconPress) {
    return (
      <IconWrapper>
        <XTouchableIcon
          name={trailingIcon}
          size={20}
          color={color}
          onPress={onTrailingIconPress}
        />
      </IconWrapper>
    );
  }
  return (
    <IconWrapper>
      <XIcon name={trailingIcon} size={20} color={color} />
    </IconWrapper>
  );
}

export default function XInput({
  onBlur,
  onFocus,
  trailingIcon,
  trailingIconColor,
  onTrailingIconPress,
  ...props
}: XInputProps) {
  const [focused, setFocused] = useState(false);

  const trailingIconComponent = useMemo(
    () => Icon({ trailingIcon, trailingIconColor, onTrailingIconPress }),
    [trailingIcon, trailingIconColor],
  );

  return (
    <Outline focused={focused}>
      <InputWrapper>
        <Input
          {...props}
          onFocus={(e) => {
            setFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            if (onBlur) onBlur(e);
          }}
        />
        {trailingIconComponent && trailingIconComponent}
      </InputWrapper>
    </Outline>
  );
}
