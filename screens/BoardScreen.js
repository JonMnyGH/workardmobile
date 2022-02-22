import React from 'react';
import * as WorkardApi from '../apis/WorkardApi.js';
import * as WorkardTODApi from '../apis/WorkardTODApi.js';
import * as WorkardcompleteApi from '../apis/WorkardcompleteApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Divider,
  ScreenContainer,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
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
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ActionSheet visible={Constants['visible']}>
        <ActionSheetItem
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'visible',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItem_1S}
          label={'Move to inprogress'}
          color={theme.colors.background}
        />
        <ActionSheetItem
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'visible',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemDa}
          label={'Move to Done'}
          color={theme.colors.background}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'visible',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
          color={theme.colors.error}
        />
      </ActionSheet>

      <View style={styles.ViewiX}>
        <Swiper
          style={styles.SwiperIP}
          dotColor={theme.colors.light}
          dotActiveColor={theme.colors.primary}
          dotsTouchable={true}
        >
          <SwiperItem>
            <View style={styles.ViewcZ}>
              <Text style={[styles.TextnN, { color: theme.colors.surface }]}>
                {'To Do\n'}
              </Text>

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
                            <Touchable
                              onPress={() => {
                                try {
                                  setGlobalVariableValue({
                                    key: 'visible',
                                    value: true,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
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
                                        <Text
                                          style={{ color: theme.colors.light }}
                                        >
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
          </SwiperItem>

          <SwiperItem>
            <Text style={[styles.Textly, { color: theme.colors.surface }]}>
              {'In Progress\n'}
            </Text>

            <ScrollView
              contentContainerStyle={styles.ScrollViewVcContent}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <WorkardTODApi.FetchNewEndpointGET>
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
                                styles.Viewlj,
                                {
                                  borderRadius: 5,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                            >
                              <View style={styles.ViewsN}>
                                <View style={styles.Viewgz}>
                                  <>
                                    {!listData?.title ? null : (
                                      <Text
                                        style={[
                                          theme.typography.body1,
                                          styles.Textbj,
                                          { color: theme.colors.strong },
                                        ]}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={1}
                                      >
                                        {listData?.title}
                                      </Text>
                                    )}
                                  </>
                                  <View style={styles.Viewah}>
                                    <View style={styles.ViewsY}>
                                      <Text
                                        style={{ color: theme.colors.light }}
                                      >
                                        {null}
                                      </Text>
                                    </View>

                                    <View style={styles.ViewUT}>
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
                                  styles.Viewbi,
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
                              style={styles.Dividerq0}
                              height={1}
                              color={theme.colors.divider}
                            />
                          </Touchable>
                        );
                      }}
                      contentContainerStyle={styles.FlatListELContent}
                      numColumns={1}
                      data={data}
                    />
                  );
                }}
              </WorkardTODApi.FetchNewEndpointGET>
            </ScrollView>
          </SwiperItem>

          <SwiperItem>
            <Text style={[styles.TextLh, { color: theme.colors.surface }]}>
              {'Complete\n'}
            </Text>

            <ScrollView
              contentContainerStyle={styles.ScrollViewxlContent}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <WorkardcompleteApi.FetchNewEndpointGET>
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
                                styles.View_7a,
                                {
                                  borderRadius: 5,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                            >
                              <View style={styles.View_4C}>
                                <View style={styles.ViewpY}>
                                  <>
                                    {!listData?.title ? null : (
                                      <Text
                                        style={[
                                          theme.typography.body1,
                                          styles.TextLf,
                                          { color: theme.colors.strong },
                                        ]}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={1}
                                      >
                                        {listData?.title}
                                      </Text>
                                    )}
                                  </>
                                  <View style={styles.Viewe1}>
                                    <View style={styles.Viewzj}>
                                      <Text
                                        style={{ color: theme.colors.light }}
                                      >
                                        {null}
                                      </Text>
                                    </View>

                                    <View style={styles.ViewsE}>
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
                                  styles.ViewXI,
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
                              style={styles.DividerKW}
                              height={1}
                              color={theme.colors.divider}
                            />
                          </Touchable>
                        );
                      }}
                      contentContainerStyle={styles.FlatListVeContent}
                      numColumns={1}
                      data={data}
                    />
                  );
                }}
              </WorkardcompleteApi.FetchNewEndpointGET>
            </ScrollView>
          </SwiperItem>
        </Swiper>
        <View style={styles.ViewFy} pointerEvents={'auto'} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ActionSheetItem_1S: {
    textAlign: 'center',
  },
  ActionSheetItemDa: {
    textAlign: 'center',
  },
  TextnN: {
    fontSize: 30,
    paddingBottom: 30,
    alignSelf: 'flex-start',
    paddingLeft: 20,
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
  Textly: {
    fontSize: 30,
    paddingLeft: 20,
  },
  Textbj: {
    marginLeft: 15,
  },
  ViewsY: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewUT: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  Viewah: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewgz: {
    alignSelf: 'stretch',
  },
  ViewsN: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  Viewbi: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  Viewlj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  Dividerq0: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListELContent: {
    flex: 1,
  },
  ScrollViewVcContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  TextLh: {
    fontSize: 30,
    paddingLeft: 20,
  },
  TextLf: {
    marginLeft: 15,
  },
  Viewzj: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewsE: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  Viewe1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewpY: {
    alignSelf: 'stretch',
  },
  View_4C: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  ViewXI: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  View_7a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  DividerKW: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListVeContent: {
    flex: 1,
  },
  ScrollViewxlContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  SwiperIP: {
    height: 300,
    width: '100%',
    flex: 1,
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
