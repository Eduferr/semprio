import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import { cores } from '../../temas/cores';
import { estilos } from './estilos';

// Propriedades da barra inferior
type Props = {
  rotaAtual: 'home' | 'perfil';
  aoPressionarHome: () => void;
  aoPressionarSOS: () => void;
  aoPressionarPerfil: () => void;
};

// Propriedades dos botões Home e Perfil
type ItemBarraProps = {
  icone: keyof typeof Ionicons.glyphMap;
  texto: string;
  ativo: boolean;
  testID: string;
  accessibilityLabel: string;
  aoPressionar: () => void;
};

// Componente reutilizável para os botões laterais
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
      {/* Ícone do botão */}
      <Ionicons
        name={icone}
        size={24}
        color={ativo ? cores.azulPrincipal : cores.textoSuave}
      />

      {/* Texto do botão */}
      <Text style={[estilos.texto, ativo && estilos.textoAtivo]}>
        {texto}
      </Text>
    </Pressable>
  );
}

// Aviso exibido quando o usuário toca rapidamente no SOS
function AvisoSOS({
  visivel,
  aoFechar,
}: {
  visivel: boolean;
  aoFechar: () => void;
}) {
  useEffect(() => {
    if (!visivel) return;

    const temporizador = setTimeout(() => {
      aoFechar();
    }, 5000);

    return () => clearTimeout(temporizador);
  }, [visivel, aoFechar]);

  return (
    <Modal transparent visible={visivel} animationType="fade">
      <View style={estilos.fundoModalSOS}>
        <View style={estilos.caixaModalSOS}>
          <Text style={estilos.tituloModalSOS}>SOS</Text>

          <Text style={estilos.mensagemModalSOS}>
            Pressione por 3 segundos para acionar o pedido de ajuda.
          </Text>

          <Pressable style={estilos.botaoOkModalSOS} onPress={aoFechar}>
            <Text style={estilos.textoOkModalSOS}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

// Botão central SOS
function BotaoSOS({ aoPressionar }: { aoPressionar: () => void }) {
  const [avisoVisivel, setAvisoVisivel] = useState(false);

  // Clique rápido apenas orienta o usuário
  function avisarPressionarPorTresSegundos() {
    setAvisoVisivel(true);
  }

  // Pressionar por 3 segundos executa o SOS
  function acionarSOS() {
    setAvisoVisivel(false);
    aoPressionar();
  }

  return (
    <>
      <Pressable
        testID="botao-sos"
        accessibilityLabel="Acionar SOS"
        style={estilos.botaoSOS}
        onPress={avisarPressionarPorTresSegundos}
        onLongPress={acionarSOS}
        delayLongPress={3000}
      >
        <Text style={estilos.textoSOS}>SOS</Text>

        {/* Instrução exibida ao usuário */}
        <Text style={estilos.textoSOSInfo}>Pressione por</Text>
        <Text style={estilos.textoSOSInfo}>3 segundos</Text>
      </Pressable>

      <AvisoSOS
        visivel={avisoVisivel}
        aoFechar={() => setAvisoVisivel(false)}
      />
    </>
  );
}

// Barra inferior fixa do aplicativo
export function BarraInferior({
  rotaAtual,
  aoPressionarHome,
  aoPressionarSOS,
  aoPressionarPerfil,
}: Props) {
  return (
    <View style={estilos.container}>
      {/* Botão Home */}
      <ItemBarra
        icone="home"
        texto="Home"
        ativo={rotaAtual === 'home'}
        testID="aba-home"
        accessibilityLabel="Abrir tela inicial"
        aoPressionar={aoPressionarHome}
      />

      {/* Botão SOS central */}
      <BotaoSOS aoPressionar={aoPressionarSOS} />

      {/* Botão Perfil */}
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