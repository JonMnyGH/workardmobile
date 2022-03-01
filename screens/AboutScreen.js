import React from 'react';
import { ButtonOutline, ScreenContainer, withTheme } from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const AboutScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgroundaS}
        resizeMode={'cover'}
        backgroundColor={theme.colors.background}
      >
        <View pointerEvents={'auto'}>
          <Text style={[styles.TextZ8, { color: theme.colors.strongInverse }]}>
            {'Workard'}
          </Text>

          <Text style={[styles.Textkx, { color: theme.colors.strongInverse }]}>
            {'Powerful tool for managing projects\n'}
          </Text>
        </View>
        <View pointerEvents={'auto'} />
        <View pointerEvents={'auto'}>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('AdminScreen_ZbuHmBoM');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineht,
              {
                borderColor: theme.colors.lightInverse,
                color: theme.colors.background,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            title={'Back'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextZ8: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'AdventPro_400Regular',
    marginBottom: 8,
  },
  Textkx: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 16,
  },
  ButtonOutlineht: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 50,
  },
  ImageBackgroundaS: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(AboutScreen);
