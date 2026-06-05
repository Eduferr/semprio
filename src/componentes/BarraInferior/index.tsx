import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { estilos } from './estilos';

type Props = {
    rotaAtual: 'home' | 'perfil';
    aoPressionarHome: () => void;
    aoPressionarSOS: () => void;
    aoPressionarPerfil: () => void;
};

export function BarraInferior({
    rotaAtual,
    aoPressionarHome,
    aoPressionarSOS,
    aoPressionarPerfil,
}: Props) {
    return (
        <View style={estilos.container}>
            <Pressable
                testID="aba-home"
                accessibilityLabel="Abrir tela inicial"
                style={estilos.item}
                onPress={aoPressionarHome}
            >
                <Ionicons
                    name="home"
                    size={24}
                    color={rotaAtual === 'home' ? '#1E88E5' : '#8A8F98'}
                />
                <Text style={[estilos.texto, rotaAtual === 'home' && estilos.textoAtivo]}>
                    Home
                </Text>
            </Pressable>

            <Pressable
                testID="botao-sos"
                accessibilityLabel="Acionar SOS"
                style={estilos.botaoSOS}
                onPress={aoPressionarSOS}
            >
                <Text style={estilos.textoSOS}>SOS</Text>
                <Text style={estilos.subtextoSOS}>Pressione por</Text>
                <Text style={estilos.subtextoSOS}>3 segundos</Text>
            </Pressable>

            <Pressable
                testID="aba-perfil"
                accessibilityLabel="Abrir perfil"
                style={estilos.item}
                onPress={aoPressionarPerfil}
            >
                <Ionicons
                    name="person"
                    size={24}
                    color={rotaAtual === 'perfil' ? '#1E88E5' : '#8A8F98'}
                />
                <Text style={[estilos.texto, rotaAtual === 'perfil' && estilos.textoAtivo]}>
                    Perfil
                </Text>
            </Pressable>
        </View>
    );
}