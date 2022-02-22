import React from 'react';
import * as WorkardApi from '../apis/WorkardApi.js';
import { Divider, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const BoardScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.ViewiX}>
        <View style={styles.ViewcZ}>
          <Text
            style={[
              theme.typography.headline4,
              styles.TextD5,
              { color: theme.colors.strong },
            ]}
          >
            {'In progress\n\n'}
          </Text>

          <Touchable style={styles.Touchable_9p}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.secondary },
              ]}
            >
              {null}
            </Text>
          </Touchable>
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewCeContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <WorkardApi.FetchWorkardInprogresGET>
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
                      <Touchable>
                        <View
                          style={[
                            styles.ViewO3,
                            {
                              borderRadius: 5,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <View style={styles.Viewsn}>
                            <View style={styles.ViewSy}>
                              <>
                                {!listData?.title ? null : (
                                  <Text
                                    style={[
                                      theme.typography.body1,
                                      styles.TextEf,
                                      { color: theme.colors.strong },
                                    ]}
                                    ellipsizeMode={'tail'}
                                    numberOfLines={1}
                                  >
                                    {listData?.title}
                                  </Text>
                                )}
                              </>
                              <View style={styles.View_6h}>
                                <View style={styles.ViewwA}>
                                  <Text style={{ color: theme.colors.light }}>
                                    {null}
                                  </Text>
                                </View>

                                <View style={styles.ViewYU}>
                                  <Text
                                    style={[
                                      theme.typography.caption,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.details}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View
                            style={[
                              styles.ViewaF,
                              {
                                backgroundColor: theme.colors.surface,
                                borderRadius: 5,
                              },
                            ]}
                          >
                            <>
                              {!listData?.concat ? null : (
                                <Text
                                  style={[
                                    theme.typography.body2,
                                    { color: theme.colors.background },
                                  ]}
                                >
                                  {listData?.concat}
                                </Text>
                              )}
                            </>
                          </View>
                        </View>
                        <Divider
                          style={styles.DividerUy}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    );
                  }}
                  contentContainerStyle={styles.FlatListV6Content}
                  numColumns={1}
                  data={data}
                />
              );
            }}
          </WorkardApi.FetchWorkardInprogresGET>
        </ScrollView>
        <View style={styles.ViewFy} pointerEvents={'auto'} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextD5: {
    fontFamily: 'Actor_400Regular',
  },
  Touchable_9p: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewcZ: {
    alignItems: 'center',
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  TextEf: {
    marginLeft: 15,
  },
  ViewwA: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewYU: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  View_6h: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewSy: {
    alignSelf: 'stretch',
  },
  Viewsn: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  ViewaF: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  ViewO3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  DividerUy: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListV6Content: {
    flex: 1,
  },
  ScrollViewCeContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  ViewFy: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
  },
  ViewiX: {
    paddingTop: 34,
    flex: 1,
  },
});

export default withTheme(BoardScreen);
