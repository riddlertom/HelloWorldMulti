import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#64748b',
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarLabel: 'Home' }}
      />
      <Tabs.Screen
        name="whois"
        options={{ title: 'Whois Lookup', tabBarLabel: 'Whois' }}
      />
      <Tabs.Screen
        name="test3"
        options={{ title: 'Test3', tabBarLabel: 'Test3' }}
      />
    </Tabs>
  );
}
