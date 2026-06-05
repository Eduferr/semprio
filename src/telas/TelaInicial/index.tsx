import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { BarraInferior } from '../../componentes/barraInferior';
import { CartaoMenu } from '../../componentes/cartaoMenu';
import { estilos } from './estilos';

export function TelaInicial({ navigation }: any) {
  function acionarSOS() {
    console.log('SOS acionado');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Semprio</Text>

        <Text style={estilos.subtitulo}>
          Cuidando de quem você ama ❤️
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilos.conteudo}
      >
        <CartaoMenu
          icone="medical"
          titulo="Medicamentos"
          descricao="Cadastrar lembretes"
          testID="botao-medicamentos"
          aoPressionar={() => {}}
        />

        <CartaoMenu
          icone="calendar"
          titulo="Consultas"
          descricao="Acompanhar médicos e exames"
          testID="botao-consultas"
          aoPressionar={() => {}}
        />

        <CartaoMenu
          icone="heart"
          titulo="Saúde"
          descricao="Pressão, glicemia e observações"
          testID="botao-saude"
          aoPressionar={() => {}}
        />

        <CartaoMenu
          icone="people"
          titulo="Família"
          descricao="Compartilhar cuidados"
          testID="botao-familia"
          aoPressionar={() => navigation.navigate('TelaFamilia')}
        />

        <CartaoMenu
          icone="pricetag"
          titulo="Promoções"
          descricao="Benefícios e ofertas"
          testID="botao-promocoes"
          aoPressionar={() => {}}
        />
      </ScrollView>

      <BarraInferior
        rotaAtual="home"
        aoPressionarHome={() => {}}
        aoPressionarSOS={acionarSOS}
        aoPressionarPerfil={() => navigation.navigate('TelaPerfil')}
      />
    </SafeAreaView>
  );
}