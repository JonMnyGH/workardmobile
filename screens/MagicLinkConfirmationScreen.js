import React from 'react';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const MagicLinkConfirmationScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewAV}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.Viewh1} pointerEvents={'auto'}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Textdd,
              { color: theme.colors.strong },
            ]}
          >
            {'Project created successfully'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextCw,
              { color: theme.colors.strong },
            ]}
          >
            {' '}
          </Text>
        </View>

        <View style={styles.ViewUm} pointerEvents={'auto'}>
          <Touchable style={styles.Touchable_7X} />
          <Button
            onPress={() => {
              try {
                navigation.navigate('Workard', { screen: 'BoardScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.ButtonVv, { borderColor: theme.colors.secondary }]}
            type={'solid'}
            color={theme.colors.secondary}
          >
            {'Close'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textdd: {
    textAlign: 'center',
  },
  TextCw: {
    marginTop: 20,
    textAlign: 'center',
  },
  Viewh1: {
    marginLeft: 16,
    marginRight: 16,
  },
  Touchable_7X: {
    marginBottom: 24,
  },
  ButtonVv: {
    height: 48,
  },
  ViewUm: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
  KeyboardAvoidingViewAV: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default withTheme(MagicLinkConfirmationScreen);
