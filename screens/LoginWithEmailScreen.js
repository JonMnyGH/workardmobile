import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
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

  const [textFieldValue, setTextFieldValue] = React.useState('');

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
          <TextField
            onChangeText={newTextFieldSolidValue => {
              const textFieldValue = newTextFieldSolidValue;
              try {
                setTextFieldValue(textFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={''}
            type={'solid'}
            value={textFieldValue}
            label={'Email'}
            keyboardType={'email-address'}
            defaultValue={'Jon.Olson@skywardfederal.com'}
          />
          <TextField
            onChangeText={newPasswordValue => {
              const textFieldValue = newPasswordValue;
              try {
                setTextFieldValue(textFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextFieldop}
            placeholder={''}
            type={'solid'}
            value={textFieldValue}
            secureTextEntry={true}
            label={'Password'}
            keyboardType={'visible-password'}
          />
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
            title={'Log In'}
          />
        </View>

        <View style={styles.ViewjA}>
          <Icon
            style={[
              styles.IconI7,
              { backgroundColor: theme.colors.background },
            ]}
            name={'Ionicons/finger-print-outline'}
            size={50}
            color={theme.colors.secondary}
          />
          <Icon
            style={styles.IconTC}
            name={'MaterialCommunityIcons/face-recognition'}
            size={50}
            color={theme.colors.secondary}
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
  TextFieldop: {
    marginTop: 8,
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
  IconI7: {
    left: '30%',
    position: 'absolute',
  },
  IconTC: {
    left: 50,
  },
  ViewjA: {
    paddingBottom: 0,
    alignItems: 'flex-start',
    paddingTop: 0,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginLeft: 0,
  },
  KeyboardAvoidingViewSz: {
    justifyContent: 'space-around',
    flexGrow: 1,
    marginLeft: 0,
  },
});

export default withTheme(LoginWithEmailScreen);
