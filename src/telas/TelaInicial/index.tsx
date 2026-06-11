import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraInferior } from '../../componentes/barraInferior';
import { coresCards, estilosGlobais } from '../../estilos/estilosGlobais';
import { cores } from '../../temas/cores';
import { estilos } from './estilos';

//Função que habilita e desabilita o card
function CardAtalho({
  titulo,
  descricoes,
  icone,
  corIcone,
  corFundo,
  desabilitado = false,
  aoPressionar,
}: any) {
  return (
    <Pressable
      disabled={desabilitado}
      style={({ pressed }) => [
        estilos.cardAtalho,
        { backgroundColor: desabilitado ? '#F1F1F1' : corFundo },
        desabilitado && estilos.cardDesabilitado,
        pressed && !desabilitado && estilosGlobais.cardPressionado,
      ]}
      onPress={aoPressionar}
    >
      <Ionicons
        name={icone}
        size={30}
        color={desabilitado ? '#A3A3A3' : corIcone}
      />

      <Text style={[estilos.tituloCard, desabilitado && estilos.textoDesabilitado]}>
        {titulo}
      </Text>

      {descricoes.map((descricao: string) => (
        <Text
          key={descricao}
          style={[
            estilos.descricaoCard,
            desabilitado && estilos.textoDesabilitado,
          ]}
        >
          {descricao}
        </Text>
      ))}
    </Pressable>
  );
}

export function TelaInicial({ navigation }: any) {
  const { width } = useWindowDimensions();
  const telaPequena = width < 380;

  function acionarSOS() {
    console.log('SOS acionado');
  }

  const pessoaCuidada = {
    nome: 'Marlene Ferreira',
    inicial: 'M',
    tipoSanguineo: 'A+',
  };

  return (
    <SafeAreaView style={estilosGlobais.container}>
      <View style={estilos.cabecalho}>
        <View style={estilos.infoCabecalho}>
          <Text style={[estilos.frasePrincipal, telaPequena && estilos.frasePrincipalPequena]}>
            Cuidando de:
          </Text>

          <Text
            style={[estilos.nomePessoa, telaPequena && estilos.nomePessoaPequena]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {pessoaCuidada.nome}
          </Text>

          <Text style={estilos.tipoSanguineo} numberOfLines={1}>
            Tipo sanguíneo:{' '}
            <Text style={estilos.tipoSanguineoValor}>{pessoaCuidada.tipoSanguineo}</Text>
          </Text>

          <Pressable
            style={({ pressed }) => [
              estilos.linhaFamilia,
              pressed && estilosGlobais.cardPressionado,
            ]}
            onPress={() => navigation.navigate('TelaFamilia')}
          >
            <Ionicons name="people" size={17} color={cores.vermelhoSOS} />

            <Text style={estilos.textoFamilia} numberOfLines={1} adjustsFontSizeToFit>
              Contatos de emergência
            </Text>
          </Pressable>
        </View>

        <View style={[estilos.avatarPessoa, telaPequena && estilos.avatarPessoaPequeno]}>
          <Text style={estilos.inicialPessoa}>{pessoaCuidada.inicial}</Text>

          <View style={estilos.badgeCoracao}>
            <Ionicons name="heart" size={18} color={cores.branco} />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[estilosGlobais.conteudoComRodape, estilos.conteudo]}
      >
        <View style={estilos.cardEmocional}>
          <View style={estilos.textoCardEmocional}>
            <Text style={estilos.fraseCard}>Cuidar todos os dias é amor em ação</Text>
          </View>

          <Image
            source={require('../../recursos/imagens/cuidado-familia.png')}
            style={estilos.imagemCard}
            resizeMode="contain"
          />
        </View>

        <Text style={estilos.tituloSecao}>Acesso rápido</Text>

        <View style={estilos.gradeCards}>
          <CardAtalho
            titulo="Restrições"
            descricoes={['Doenças preexistentes', 'Alergias']}
            icone="warning"
            corIcone={cores.roxoEscuro}
            corFundo={coresCards.restricoes}
            aoPressionar={() => navigation.navigate('TelaMedicamentos')}
          />

          <CardAtalho
            titulo="Medicamentos"
            descricoes={['Cadastro', 'Lembretes e horários']}
            icone="medkit"
            corIcone={cores.azulPrincipal}
            corFundo={coresCards.medicamentos}
            aoPressionar={() => navigation.navigate('TelaMedicamentos')}
          />

          <CardAtalho
            titulo="Agendamentos"
            descricoes={['- Consultas', '- Exames']}
            icone="calendar"
            corIcone="#16B978"
            corFundo={coresCards.consultas}
            aoPressionar={() => navigation.navigate('TelaConsultas')}
          />

          <CardAtalho
            titulo="Saúde"
            descricoes={['Controle de Pressão', 'Controle Glicêmico']}
            icone="heart"
            corIcone={cores.vermelhoSOS}
            corFundo={coresCards.saude}
            aoPressionar={() => navigation.navigate('TelaSaude')}
          />

          <CardAtalho
            desabilitado // <- remova para habilitar o card
            titulo="Promoções"
            descricoes={['Em breve']}
            icone="pricetag"
            corIcone="#F59E0B"
            corFundo={coresCards.promocoes}
            aoPressionar={() => navigation.navigate('TelaPromocoes')}
          />
        </View>
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