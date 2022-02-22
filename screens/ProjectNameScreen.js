import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ProjectNameScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [name, setName] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewJ8}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={16}
      >
        <View style={styles.ViewSR} pointerEvents={'auto'}>
          <Text
            style={[
              styles.TextVF,
              {
                color: theme.colors.secondary,
                textDecorationColor: theme.colors.error,
              },
            ]}
          >
            {'New project details'}
          </Text>
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextKc, { color: theme.colors.medium }]}>
            {'Project Name'}
          </Text>
          <TextInput
            onChangeText={newNameValue => {
              const name = newNameValue;
              try {
                setName(name);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInputkJ,
              {
                borderColor: theme.colors.light,
                color: theme.colors.secondary,
              },
            ]}
            value={name}
            placeholderTextColor={theme.colors.light}
            placeholder={'Enter a name'}
          />
          <Button
            onPress={() => {
              try {
                navigation.navigate('Workard', {
                  screen: 'MagicLinkConfirmationScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.ButtonLI, { borderRadius: 1 }]}
            type={'solid'}
            color={theme.colors.secondary}
            disabled={false}
          >
            {'Create'}
          </Button>
        </View>
        <View pointerEvents={'auto'} />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextVF: {
    width: '100%',
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewSR: {
    alignItems: 'center',
    marginBottom: 16,
  },
  TextKc: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 13,
    marginBottom: 16,
  },
  TextInputkJ: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  ButtonLI: {
    marginBottom: 16,
  },
  KeyboardAvoidingViewJ8: {
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(ProjectNameScreen);
