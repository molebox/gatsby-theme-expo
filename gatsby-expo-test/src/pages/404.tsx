import React from 'react';
import { Text, View } from 'react-native';
import { useREM } from 'react-native-web-hooks';

const NotFoundPage = () => (
  <View>
    <Text accessibilityRole="header" style={{ fontWeight: 'bold', fontSize: useREM(2.25) }}>NOT FOUND</Text>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </View>
)

export default NotFoundPage