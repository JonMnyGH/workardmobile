import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const NewItemScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={styles.Viewr9} pointerEvents={'auto'}>
        <View pointerEvents={'auto'} />
        <View style={styles.Viewbo}>
          <Text style={[styles.TextqK, { color: theme.colors.secondary }]}>
            {'New item\n'}
          </Text>
        </View>

        <View style={styles.ViewUs}>
          <>
            {Constants['visible'] ? null : (
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(textInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputCj,
                  {
                    borderColor: theme.colors.divider,
                    color: theme.colors.secondary,
                  },
                ]}
                placeholder={'Enter a title'}
                placeholderTextColor={theme.colors.light}
                defaultValue={Constants['ERROR_MESSAGE']}
              />
            )}
          </>
        </View>

        <View pointerEvents={'auto'}>
          <View pointerEvents={'auto'}>
            <View pointerEvents={'auto'}>
              <TextInput
                onChangeText={newTextAreaValue => {
                  const textInputValue = newTextAreaValue;
                  try {
                    setTextInputValue(textInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputNX,
                  { borderColor: theme.colors.divider },
                ]}
                placeholder={
                  'Enter a description here. The description should describe in deatail what needs to be completed.'
                }
                multiline={true}
                numberOfLines={4}
                value={textInputValue}
                placeholderTextColor={theme.colors.light}
              />
            </View>
          </View>

          <View pointerEvents={'auto'}>
            <View style={styles.Viewzw}>
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(textInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputbt,
                  { borderColor: theme.colors.divider },
                ]}
                placeholder={'  Add a task'}
                value={textInputValue}
                placeholderTextColor={theme.colors.light}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextqK: {
    fontSize: 30,
    fontFamily: 'System',
    fontWeight: '300',
  },
  Viewbo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 32,
  },
  TextInputCj: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  ViewUs: {
    paddingBottom: 16,
  },
  TextInputNX: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    minHeight: 150,
  },
  TextInputbt: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '100%',
  },
  Viewzw: {
    marginTop: 32,
    flexDirection: 'row',
  },
  Viewr9: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
  },
});

export default withTheme(NewItemScreen);
