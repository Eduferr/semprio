import { Button, Text, View } from 'react-native';

export function TelaInicial({ navigation }: any) {
  return (
    <View>
      <Text>Home - Semprio</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.navigate('TelaPerfil')} />
    </View>
  );
}