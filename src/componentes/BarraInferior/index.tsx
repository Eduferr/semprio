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
                    color={rotaAtual === 'home' ? cores.azulPrincipal : cores.textoSuave}
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
                <Text style={estilos.textoSOSInfo}>Pressione por</Text>
                <Text style={estilos.textoSOSInfo}>3 segundos</Text>
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
                    color={rotaAtual === 'perfil' ? cores.azulPrincipal : cores.textoSuave}
                />
                <Text style={[estilos.texto, rotaAtual === 'perfil' && estilos.textoAtivo]}>
                    Perfil
                </Text>
            </Pressable>
        </View>
    );
}