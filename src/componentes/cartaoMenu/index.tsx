import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { cores } from '../../temas/cores';
import { estilos } from './estilos';

type Props = {
  icone: keyof typeof Ionicons.glyphMap;
  titulo: string;
  descricao: string;
  testID: string;
  aoPressionar: () => void;
  desabilitado?: boolean;
};

export function CartaoMenu({
  icone,
  titulo,
  descricao,
  testID,
  aoPressionar,
  desabilitado = false,
}: Props) {
  return (
    <Pressable
      testID={testID}
      accessibilityLabel={titulo}
      style={[
        estilos.container,
        desabilitado && estilos.containerDesabilitado,
      ]}
      onPress={aoPressionar}
      disabled={desabilitado}
    >
      <View
        style={[
          estilos.areaIcone,
          desabilitado && estilos.areaIconeDesabilitado,
        ]}
      >
        <Ionicons
          name={icone}
          size={28}
          color={desabilitado ? cores.textoSuave : cores.azulPrincipal}
        />
      </View>

      <View style={estilos.areaTexto}>
        <Text
          style={[
            estilos.titulo,
            desabilitado && estilos.textoDesabilitado,
          ]}
        >
          {titulo}
        </Text>

        <Text
          style={[
            estilos.descricao,
            desabilitado && estilos.textoDesabilitado,
          ]}
        >
          {descricao}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color={desabilitado ? cores.borda : cores.textoSuave}
      />
    </Pressable>
  );
}