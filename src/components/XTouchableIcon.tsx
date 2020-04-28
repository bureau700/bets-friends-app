import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import XIcon, { XIconProps } from './XIcon';

interface XTouchableIconPrivate {
  onPress: () => void;
}

export type XTouchaleIconProps = XTouchableIconPrivate & XIconProps;

export default function XTouchableIcon({
  onPress,
  ...props
}: XTouchaleIconProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <XIcon {...props} />
    </TouchableWithoutFeedback>
  );
}
