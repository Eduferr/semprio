import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { cores } from '../../temas/cores';
import { estilos } from './estilos';

type Props = {
  rotaAtual: 'home' | 'perfil';
  aoPressionarHome: () => void;
  aoPressionarSOS: () => void;
  aoPressionarPerfil: () => void;
};

type ItemBarraProps = {
  icone: keyof typeof Ionicons.glyphMap;
  texto: string;
  ativo: boolean;
  testID: string;
  accessibilityLabel: string;
  aoPressionar: () => void;
};

function ItemBarra({
  icone,
  texto,
  ativo,
  testID,
  accessibilityLabel,
  aoPressionar,
}: ItemBarraProps) {
  return (
    <Pressable
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={estilos.item}
      onPress={aoPressionar}
    >
      <Ionicons
        name={icone}
        size={24}
        color={ativo ? cores.azulPrincipal : cores.textoSuave}
      />

      <Text style={[estilos.texto, ativo && estilos.textoAtivo]}>
        {texto}
      </Text>
    </Pressable>
  );
}

function BotaoSOS({ aoPressionar }: { aoPressionar: () => void }) {
  return (
    <Pressable
      testID="botao-sos"
      accessibilityLabel="Acionar SOS"
      style={estilos.botaoSOS}
      onPress={aoPressionar}
    >
      <Text style={estilos.textoSOS}>SOS</Text>
      <Text style={estilos.textoSOSInfo}>Pressione por</Text>
      <Text style={estilos.textoSOSInfo}>3 segundos</Text>
    </Pressable>
  );
}

export function BarraInferior({
  rotaAtual,
  aoPressionarHome,
  aoPressionarSOS,
  aoPressionarPerfil,
}: Props) {
  return (
    <View style={estilos.container}>
      <ItemBarra
        icone="home"
        texto="Home"
        ativo={rotaAtual === 'home'}
        testID="aba-home"
        accessibilityLabel="Abrir tela inicial"
        aoPressionar={aoPressionarHome}
      />

      <BotaoSOS aoPressionar={aoPressionarSOS} />

      <ItemBarra
        icone="person"
        texto="Perfil"
        ativo={rotaAtual === 'perfil'}
        testID="aba-perfil"
        accessibilityLabel="Abrir perfil"
        aoPressionar={aoPressionarPerfil}
      />
    </View>
  );
}