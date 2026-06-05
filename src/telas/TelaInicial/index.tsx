import { Text, View } from 'react-native';

import { BarraInferior } from '../../componentes/BarraInferior';

export function TelaInicial({ navigation }: any) {
  function abrirPerfil() {
    navigation.navigate('TelaPerfil');
  }

  function acionarSOS() {
    console.log('SOS acionado');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      <View style={{ flex: 1, padding: 24 }}>
        <Text>Home - Semprio</Text>
      </View>

      <BarraInferior
        rotaAtual="home"
        aoPressionarHome={() => { }}
        aoPressionarSOS={acionarSOS}
        aoPressionarPerfil={abrirPerfil}
      />
    </View>
  );
}