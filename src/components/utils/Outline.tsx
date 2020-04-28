import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const ANIMATION_DURATION = 150;
const OUTLINE_WIDTH = 4;
const OUTLINE_COLOR = '#ddd';
const OUTLINE_RADIUS = 7;

interface OutlineProps {
  animationDuration?: number;
  children: React.ReactNode;
  focused?: boolean;
  outlineColor?: string;
  outlineRadius?: number;
  outlineWidth?: number;
}

export default function Outline({
  animationDuration = ANIMATION_DURATION,
  children,
  focused = false,
  outlineColor = OUTLINE_COLOR,
  outlineRadius = OUTLINE_RADIUS,
  outlineWidth = OUTLINE_WIDTH,
}: OutlineProps) {
  const borderWidth = useRef(new Animated.Value(0)).current;

  const runAnimation = useCallback(() => {
    if (focused) {
      return Animated.timing(borderWidth, {
        toValue: 100,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      });
    }
    return Animated.timing(borderWidth, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    });
  }, [focused]);

  useEffect(
    function focusChange() {
      const animation = runAnimation();
      animation.start();
      return () => animation.stop();
    },
    [focused],
  );

  return (
    <Animated.View
      style={{
        padding: borderWidth.interpolate({
          inputRange: [0, 100],
          outputRange: [outlineWidth, 0],
        }),
      }}>
      <Animated.View
        style={{
          borderColor: outlineColor,
          borderRadius: outlineRadius,
          borderWidth: borderWidth.interpolate({
            inputRange: [0, 100],
            outputRange: [0, outlineWidth],
          }),
        }}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}
