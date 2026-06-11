import { StyleSheet } from 'react-native';

import { cores } from '../temas/cores';
import { espacamentos } from '../temas/espacamentos';

export const ALTURA_RODAPE = 190;

export const coresCards = {
    restricoes: '#F1E8FF',   // Roxo claro
    medicamentos: '#EAF4FF', // Azul claro
    consultas: '#DFF4E8',
    saude: '#FFE7EB',
    promocoes: '#FFF4D8',
    emocional: '#FDE7F0',
    desabilitado: '#F1F1F1'
};

export const estilosGlobais = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.fundo,
    },

    conteudoComRodape: {
        flexGrow: 1,
        paddingHorizontal: espacamentos.grande,
        paddingBottom: ALTURA_RODAPE,
    },

    cardPressionado: {
        opacity: 0.82,
        transform: [{ scale: 0.98 }],
    },
    
});