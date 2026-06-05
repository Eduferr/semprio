import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        height: 86,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 14,
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
        color: '#8A8F98',
        fontWeight: '600',
    },

    textoAtivo: {
        color: '#1E88E5',
    },

    botaoSOS: {
        width: 110,
        height: 110,
        borderRadius: 46,
        backgroundColor: '#EF3434',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -42,
        borderWidth: 8,
        borderColor: '#FAD0D0',
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 10,
        elevation: 8,
    },

    textoSOS: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 30,
    },

    subtextoSOS: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 13,
    },
});