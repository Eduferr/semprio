import { StyleSheet } from 'react-native';

import { cores } from '../../temas/cores';
import { espacamentos } from '../../temas/espacamentos';
import { fontes } from '../../temas/fontes';

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: cores.branco,
        borderRadius: espacamentos.raioCard,
        padding: espacamentos.medio,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: cores.borda,
    },

    areaIcone: {
        width: 52,
        height: 52,
        borderRadius: 18,
        backgroundColor: cores.azulClaro,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: espacamentos.medio,
    },

    areaTexto: {
        flex: 1,
    },

    titulo: {
        fontSize: fontes.subtitulo,
        fontWeight: '700',
        color: cores.textoPrincipal,
    },

    descricao: {
        marginTop: 3,
        fontSize: fontes.corpo,
        color: cores.textoSecundario,
    },
});