import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useREM } from 'react-native-web-hooks';
import Layout from './../components/Layout';

export default () => {
  return (
    <Layout>
      <Text style={[styles.header, { fontSize: useREM(2.25) }]} accessibilityRole="header">Hi people</Text>
      <Text style={styles.paragraph}>Welcome to your new Gatsby site.</Text>
      <Text style={styles.paragraph}>Now go build something great.</Text>
      <View style={{ maxWidth: 300, marginBottom: `1.45rem` }} />
    </Layout>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 16
  }
})
