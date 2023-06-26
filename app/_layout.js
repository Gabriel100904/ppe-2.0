import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Cadastro"
        options={{
          href: '/Cadastro',
        }}
      />
    </Tabs>
  );
}