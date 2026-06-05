import { Button, Text, View } from 'react-native';

export function TelaPerfil({ navigation }: any) {
  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Configurações" onPress={() => navigation.navigate('TelaConfiguracoes')} />
      <Button title="Família" onPress={() => navigation.navigate('TelaFamilia')} />
      <Button title="Ajuda" onPress={() => navigation.navigate('TelaAjuda')} />
      <Button title="Privacidade" onPress={() => navigation.navigate('TelaPrivacidade')} />
    </View>
  );
}