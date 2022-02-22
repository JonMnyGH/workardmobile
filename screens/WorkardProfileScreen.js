import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const WorkardProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <KeyboardAwareScrollView
        enableOnAndroid={false}
        enableAutomaticScroll={true}
      >
        <View style={styles.ViewKl} pointerEvents={'auto'}>
          <View style={styles.ViewdG} pointerEvents={'auto'}>
            <Touchable
              onPress={async () => {
                try {
                  const snap = await Utils.openCamera({
                    mediaTypes: 'Images',
                    allowsEditing: true,
                    quality: 0.47,
                  });
                  setGlobalVariableValue({
                    key: 'AvatarPlaceholder',
                    value: snap,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View pointerEvents={'auto'}>
                <CircleImage
                  size={180}
                  source={{ uri: `${Constants['AvatarPlaceholder']}` }}
                />
                <Icon
                  style={styles.IconVW}
                  name={'MaterialIcons/camera-alt'}
                  size={42}
                  color={theme.colors.secondary}
                />
              </View>
            </Touchable>
          </View>

          <View style={styles.ViewrU} pointerEvents={'auto'}>
            <Text style={[styles.Text_2k, { color: theme.colors.strong }]}>
              {'Create Your Profile'}
            </Text>
            <Spacer top={4} right={8} bottom={4} left={8} />
            <Text style={[styles.Text_0A, { color: theme.colors.medium }]}>
              {'A little about yourself'}
            </Text>
          </View>
        </View>

        <View style={styles.ViewEh} pointerEvents={'auto'}>
          <View pointerEvents={'auto'}>
            <Text style={[styles.TextCn, { color: theme.colors.strong }]}>
              {"What's your nickname?"}
            </Text>
            <TextInput
              style={styles.TextInput_8a}
              placeholder={'Your answer...'}
              multiline={false}
              placeholderTextColor={theme.colors.light}
              defaultValue={''}
            />
          </View>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View pointerEvents={'auto'} />
          <View pointerEvents={'auto'} />
          <Spacer top={16} right={8} bottom={16} left={8} />
        </View>

        <View style={styles.Viewuk} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('AdminScreen_ZbuHmBoM');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidFE,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'Done'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconVW: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  ViewdG: {
    alignItems: 'center',
  },
  Text_2k: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'AdventPro_600SemiBold',
  },
  Text_0A: {
    textAlign: 'center',
    fontSize: 16,
  },
  ViewrU: {
    marginTop: 16,
  },
  ViewKl: {
    paddingLeft: 40,
    paddingTop: 60,
    paddingRight: 40,
    paddingBottom: 40,
  },
  TextCn: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_8a: {
    marginTop: 12,
    fontSize: 12,
  },
  ViewEh: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  ButtonSolidFE: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  Viewuk: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    paddingBottom: 40,
  },
  screen: {
    justifyContent: 'space-around',
  },
});

export default withTheme(WorkardProfileScreen);
