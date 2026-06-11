import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraInferior } from '../../componentes/barraInferior';
import { CartaoMenu } from '../../componentes/cartaoMenu';
import { estilos } from './estilos';

export function TelaPerfil({ navigation }: any) {
  function acionarSOS() {
    console.log('SOS acionado');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Minha Conta</Text>

        <View style={estilos.cartaoUsuario}>
          <View style={estilos.avatar}>
            <Text style={estilos.inicialAvatar}>E</Text>
          </View>

          <View style={estilos.infoUsuario}>
            <Text style={estilos.nomeUsuario}>Edu Santos</Text>
            <Text style={estilos.telefoneUsuario}>(61) 99999-9999</Text>
          </View>
        </View>

        <CartaoMenu
          icone="people"
          titulo="Família"
          descricao="Cadastrar e editar contatos"
          testID="botao-familia-perfil"
          aoPressionar={() => navigation.navigate('TelaFamilia')}
        />

        <CartaoMenu
          icone="settings"
          titulo="Configurações"
          descricao="Conta, segurança e notificações"
          testID="botao-configuracoes"
          aoPressionar={() => navigation.navigate('TelaConfiguracoes')}
        />

        <CartaoMenu
          icone="help-circle"
          titulo="Ajuda"
          descricao="Dúvidas e orientações"
          testID="botao-ajuda"
          aoPressionar={() => navigation.navigate('TelaAjuda')}
        />

        <CartaoMenu
          icone="lock-closed"
          titulo="Privacidade"
          descricao="Termos e proteção dos dados"
          testID="botao-privacidade"
          aoPressionar={() => navigation.navigate('TelaPrivacidade')}
        />
      </View>

      <BarraInferior
        rotaAtual="perfil"
        aoPressionarHome={() => navigation.navigate('TelaInicial')}
        aoPressionarSOS={acionarSOS}
        aoPressionarPerfil={() => { }}
      />
    </SafeAreaView>
  );
}