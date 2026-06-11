import { StyleSheet } from 'react-native';

import { cores } from '../../temas/cores';

export const estilos = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: cores.branco,
        borderTopWidth: 1,
        borderTopColor: cores.borda,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 0,
        paddingHorizontal: 20,
    },

    item: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    texto: {
        fontSize: 13,
        color: cores.textoSuave,
        fontWeight: '600',
    },

    textoAtivo: {
        color: cores.azulPrincipal,
    },

    botaoSOS: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: cores.vermelhoSOS,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
        borderWidth: 8,
        borderColor: cores.vermelhoClaro,
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 10,
        elevation: 8,
    },

    textoSOS: {
        color: cores.branco,
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 30,
    },

    textoSOSInfo: {
        color: cores.branco,
        fontSize: 11,
        fontWeight: '600',
        lineHeight: 13,
    },
});