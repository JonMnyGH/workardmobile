import React from 'react';
import * as ProjectTypesApi from '../apis/ProjectTypesApi.js';
import {
  ButtonSolid,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const NewProjectScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.View_6o}>
        <Text style={[styles.TextwF, { color: theme.colors.secondary }]}>
          {'Create project from template'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewAqContent}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <ProjectTypesApi.FetchProjectsGET>
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
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View
                      style={[
                        styles.View_6q,
                        { borderRadius: theme.roundness },
                      ]}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ProjectNameScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      />
                      <View style={[styles.View_42, { borderRadius: 16 }]}>
                        <ImageBackground
                          style={[
                            styles.ImageBackgroundls,
                            {
                              borderRadius: theme.roundness,
                              backgroundColor: theme.colors.surface,
                            },
                          ]}
                          resizeMode={'cover'}
                          source={{ uri: `${listData?.imgurl}` }}
                        />
                      </View>

                      <View style={styles.ViewNP}>
                        <View>
                          <Text
                            style={[
                              theme.typography.custom51,
                              styles.Textmk,
                              { color: theme.colors.secondary },
                            ]}
                            adjustsFontSizeToFit={false}
                            numberOfLines={2}
                          >
                            {listData?.person}
                          </Text>

                          <Text
                            style={{ color: theme.colors.light }}
                            numberOfLines={2}
                          >
                            {listData?.description}
                          </Text>
                        </View>

                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('ProjectNameScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles.TouchablePC}
                        >
                          <View style={styles.Viewya} />
                        </Touchable>
                      </View>
                    </View>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </ProjectTypesApi.FetchProjectsGET>
      </ScrollView>

      <View pointerEvents={'auto'}>
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('ProjectNameScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidKp,
            {
              backgroundColor: theme.colors.secondary,
              color: theme.colors.background,
            },
          ]}
          title={'Create project\n'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextwF: {
    textAlign: 'center',
    fontFamily: 'Aldrich_400Regular',
    fontSize: 30,
  },
  View_6o: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  ImageBackgroundls: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  View_42: {
    width: 140,
    height: 140,
    overflow: 'hidden',
  },
  Textmk: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 4,
    fontFamily: 'system-bold',
    fontSize: 20,
  },
  Viewya: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  TouchablePC: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewNP: {
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 16,
  },
  View_6q: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 16,
  },
  ScrollViewAqContent: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    maxHeight: '90%',
  },
  ButtonSolidKp: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
  },
  screen: {
    flex: 1,
  },
});

export default withTheme(NewProjectScreen);
