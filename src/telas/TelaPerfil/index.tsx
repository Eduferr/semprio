import { Button, Text, View } from 'react-native';

import { BarraInferior } from '../../componentes/BarraInferior';

export function TelaPerfil({ navigation }: any) {
  function abrirHome() {
    navigation.navigate('TelaInicial');
  }

  function acionarSOS() {
    console.log('SOS acionado');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <View style={{ flex: 1, padding: 24 }}>
        <Text>Perfil</Text>

        <Button title="Configurações" onPress={() => navigation.navigate('TelaConfiguracoes')} />
        <Button title="Família" onPress={() => navigation.navigate('TelaFamilia')} />
        <Button title="Ajuda" onPress={() => navigation.navigate('TelaAjuda')} />
        <Button title="Privacidade" onPress={() => navigation.navigate('TelaPrivacidade')} />
      </View>

      <BarraInferior
        rotaAtual="perfil"
        aoPressionarHome={abrirHome}
        aoPressionarSOS={acionarSOS}
        aoPressionarPerfil={() => { }}
      />
    </View>
  );
}