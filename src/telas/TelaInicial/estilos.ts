import { StyleSheet } from 'react-native';

import { cores } from '../../temas/cores';
import { espacamentos } from '../../temas/espacamentos';
import { fontes } from '../../temas/fontes';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.fundo,
    },

    cabecalho: {
        paddingTop: 50,
        paddingHorizontal: espacamentos.grande,
        paddingBottom: 22,
        backgroundColor: cores.fundo,
        alignItems: 'center',
        zIndex: 10,
        elevation: 4,
    },

    conteudo: {
        paddingHorizontal: espacamentos.grande,
        paddingTop: 18,
        paddingBottom: 130,
    },

    titulo: {
        fontSize: fontes.tituloGrande,
        fontWeight: 'bold',
        color: cores.azulPrincipal,
        textAlign: 'center',
    },

    subtitulo: {
        marginTop: 8,
        fontSize: fontes.subtitulo,
        color: cores.textoSecundario,
        textAlign: 'center',
    },
});