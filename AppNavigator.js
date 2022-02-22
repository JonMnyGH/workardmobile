import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import AboutScreen from './screens/AboutScreen';
import AdminScreen_ZbuHmBoM from './screens/AdminScreen_ZbuHmBoM';
import BoardScreen from './screens/BoardScreen';
import LoginWithEmailScreen from './screens/LoginWithEmailScreen';
import MagicLinkConfirmationScreen from './screens/MagicLinkConfirmationScreen';
import MyTeamScreen from './screens/MyTeamScreen';
import NewItemScreen from './screens/NewItemScreen';
import NewProjectScreen from './screens/NewProjectScreen';
import ProjectNameScreen from './screens/ProjectNameScreen';
import WorkardProfileScreen from './screens/WorkardProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function Workard() {
  return (
    <Tab.Navigator
      initialRouteName="BoardScreen"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="BoardScreen"
        component={BoardScreen}
        options={{
          title: 'board',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/run"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'board',
        }}
      />
      <Tab.Screen
        name="NewItemScreen"
        component={NewItemScreen}
        options={{
          title: 'NewItem',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/history-edu"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'admin',
        }}
      />
      <Tab.Screen
        name="AdminScreen_ZbuHmBoM"
        component={AdminScreen_ZbuHmBoM}
        options={{
          title: 'Admin',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/admin-panel-settings"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginWithEmailScreen"
          component={LoginWithEmailScreen}
          options={{ title: 'Login With Email' }}
        />
        <Stack.Screen
          name="NewProjectScreen"
          component={NewProjectScreen}
          options={{ title: 'New Project' }}
        />
        <Stack.Screen
          name="AdminScreen_ZbuHmBoM"
          component={AdminScreen_ZbuHmBoM}
          options={{ title: 'Admin' }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ title: 'About' }}
        />
        <Stack.Screen
          name="WorkardProfileScreen"
          component={WorkardProfileScreen}
          options={{ title: 'Workard Profile' }}
        />
        <Stack.Screen
          name="MyTeamScreen"
          component={MyTeamScreen}
          options={{ title: 'My Team' }}
        />
        <Stack.Screen
          name="ProjectNameScreen"
          component={ProjectNameScreen}
          options={{ title: 'ProjectName' }}
        />
        <Stack.Screen
          name="MagicLinkConfirmationScreen"
          component={MagicLinkConfirmationScreen}
          options={{ title: 'Magic Link Confirmation' }}
        />
        <Stack.Screen name="Workard" component={Workard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
