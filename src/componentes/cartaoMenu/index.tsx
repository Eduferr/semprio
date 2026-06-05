import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { estilos } from './estilos';

type Props = {
  icone: keyof typeof Ionicons.glyphMap;
  titulo: string;
  descricao: string;
  testID: string;
  aoPressionar: () => void;
};

export function CartaoMenu({
  icone,
  titulo,
  descricao,
  testID,
  aoPressionar,
}: Props) {
  return (
    <Pressable
      testID={testID}
      accessibilityLabel={titulo}
      style={estilos.container}
      onPress={aoPressionar}
    >
      <View style={estilos.areaIcone}>
        <Ionicons name={icone} size={28} color="#1E88E5" />
      </View>

      <View style={estilos.areaTexto}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#8A8F98" />
    </Pressable>
  );
}