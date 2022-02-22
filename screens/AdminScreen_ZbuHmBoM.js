import React from 'react';
import {
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AdminScreen_ZbuHmBoM = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewbM} pointerEvents={'auto'}>
        <Text style={[styles.Texta7, { color: theme.colors.secondary }]}>
          {'Settings'}
        </Text>
      </View>

      <View style={styles.View_58} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('NewProjectScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.Viewp3} pointerEvents={'auto'}>
            <View style={styles.ViewIp}>
              <Icon
                size={24}
                color={theme.colors.secondary}
                name={'Octicons/project'}
              />
              <Text
                style={[styles.Texttx, { color: theme.colors.secondary }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'New Project\n'}
              </Text>
            </View>

            <View style={styles.View_2F}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.secondary}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerx5}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('MyTeamScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.Viewql} pointerEvents={'auto'}>
            <View style={styles.Viewk5}>
              <Icon
                size={24}
                color={theme.colors.secondary}
                name={'AntDesign/team'}
              />
              <Text
                style={[styles.Textcb, { color: theme.colors.secondary }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Users and teams\n'}
              </Text>
            </View>

            <View style={styles.Viewxb}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.secondary}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerAT}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.View_03} pointerEvents={'auto'}>
            <View style={styles.ViewDt}>
              <Icon
                size={24}
                color={theme.colors.secondary}
                name={'MaterialCommunityIcons/import'}
              />
              <Text
                style={[styles.TextC9, { color: theme.colors.secondary }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Import\n'}
              </Text>
            </View>

            <View style={styles.View_6a}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.secondary}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerhy}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('WorkardProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewjD} pointerEvents={'auto'}>
            <View style={styles.Vieweb}>
              <Icon
                size={24}
                color={theme.colors.secondary}
                name={'MaterialCommunityIcons/face-profile'}
              />
              <Text
                style={[styles.TextTW, { color: theme.colors.secondary }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Profile\n'}
              </Text>
            </View>

            <View style={styles.Viewkq}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.secondary}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerch}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('AboutScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewQG} pointerEvents={'auto'}>
            <View style={styles.ViewDe}>
              <Icon
                size={24}
                color={theme.colors.secondary}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[styles.TextNC, { color: theme.colors.secondary }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.ViewNC}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.secondary}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerUo}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.ViewFS} pointerEvents={'auto'}>
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('Workard', { screen: 'BoardScreen' });
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidqa,
            { backgroundColor: theme.colors.secondary },
          ]}
          title={'Done'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Texta7: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewbM: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Texttx: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
    paddingTop: 10,
  },
  ViewIp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_2F: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewp3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerx5: {
    height: 1,
  },
  Textcb: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewk5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewxb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewql: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerAT: {
    height: 1,
  },
  TextC9: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewDt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_6a: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_03: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerhy: {
    height: 1,
  },
  TextTW: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Vieweb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewkq: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewjD: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerch: {
    height: 1,
  },
  TextNC: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewDe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewNC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewQG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerUo: {
    height: 1,
  },
  View_58: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  ButtonSolidqa: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  ViewFS: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(AdminScreen_ZbuHmBoM);
