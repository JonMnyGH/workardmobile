import React from 'react';
import * as WorkardTeamMembersApi from '../apis/WorkardTeamMembersApi.js';
import { Divider, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyTeamScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={styles.View_4M}>
        <Text
          style={[styles.TexthO, { color: theme.colors.medium }]}
          numberOfLines={2}
        >
          {'Charlotte\n'}
        </Text>
        <Divider
          style={styles.DividerkM}
          color={theme.colors.light}
          height={1}
        />
        <WorkardTeamMembersApi.FetchTeamMembersGET>
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={data}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.View_8u} pointerEvents={'auto'}>
                      <View style={styles.ViewcF} pointerEvents={'auto'}>
                        <View
                          style={[
                            styles.View_7C,
                            {
                              borderRadius: theme.roundness,
                              backgroundColor: theme.colors.strongInverse,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <Image
                            style={[
                              styles.Image_1b,
                              { borderRadius: theme.roundness },
                            ]}
                            source={{ uri: item['avatar'] }}
                            resizeMode={'cover'}
                          />
                          <View style={styles.ViewtV}>
                            <Text
                              style={[
                                theme.typography.subtitle1,
                                styles.TextCD,
                                { color: theme.colors.background },
                              ]}
                              allowFontScaling={true}
                            >
                              {item && item['first_name']}
                            </Text>

                            <Text
                              style={[
                                theme.typography.caption,
                                styles.TextJ8,
                                { color: theme.colors.background },
                              ]}
                              allowFontScaling={true}
                            >
                              {listData?.last_name}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
                contentContainerStyle={styles.FlatListYoContent}
                numColumns={3}
                data={data}
                horizontal={false}
              />
            );
          }}
        </WorkardTeamMembersApi.FetchTeamMembersGET>
      </View>

      <View style={styles.View_9y} pointerEvents={'auto'}>
        <IconButton
          icon={'AntDesign/plus'}
          size={32}
          color={theme.colors.secondary}
        />
        <IconButton
          icon={'AntDesign/minus'}
          size={32}
          color={theme.colors.secondary}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TexthO: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 12,
    fontFamily: 'System',
    fontWeight: '200',
  },
  DividerkM: {
    height: 1,
    marginTop: 14,
    marginLeft: 32,
    marginRight: 32,
  },
  Image_1b: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    opacity: 0.85,
  },
  TextCD: {
    textAlign: 'center',
  },
  TextJ8: {
    textAlign: 'center',
  },
  ViewtV: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  View_7C: {
    justifyContent: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    width: 100,
  },
  ViewcF: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  View_8u: {
    marginLeft: 4,
    marginRight: 4,
    marginTop: 10,
  },
  FlatListYoContent: {
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  View_4M: {
    flex: 1,
  },
  View_9y: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default withTheme(MyTeamScreen);
