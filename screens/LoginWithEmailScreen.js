import React from 'react';
import Images from '../config/Images';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const LoginWithEmailScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={[
          styles.KeyboardAvoidingViewSz,
          { backgroundColor: theme.colors.background },
        ]}
        behavior={'position'}
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.ViewqH}>
          <Image
            style={styles.Imagevg}
            resizeMode={'contain'}
            source={Images.HardWorkingIcon10}
          />
          <Text
            style={[
              styles.TextkF,
              {
                color: theme.colors.secondary,
                textDecorationColor: theme.colors.primary,
              },
            ]}
          >
            {'Workard\n'}
          </Text>
        </View>

        <View style={styles.ViewRr}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('Workard', { screen: 'BoardScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidIM,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'Log in\n'}
          />
        </View>

        <View style={styles.Viewvf}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('Workard', { screen: 'BoardScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidGY,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'Continue'}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagevg: {
    width: 150,
    height: 150,
    marginBottom: 46,
  },
  TextkF: {
    textTransform: 'none',
    fontSize: 50,
    fontFamily: 'AdventPro_400Regular',
    textAlign: 'center',
  },
  ViewqH: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'center',
  },
  ButtonSolidIM: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    minHeight: 42,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ViewRr: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 24,
  },
  ButtonSolidGY: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    minHeight: 42,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  Viewvf: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 24,
  },
  KeyboardAvoidingViewSz: {
    justifyContent: 'space-around',
    flexGrow: 1,
    marginLeft: 0,
  },
});

export default withTheme(LoginWithEmailScreen);
