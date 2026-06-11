import { StyleSheet } from 'react-native';

import { cores } from '../../temas/cores';
import { espacamentos } from '../../temas/espacamentos';
import { fontes } from '../../temas/fontes';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },

  conteudo: {
    flex: 1,
    paddingTop: 28,
    paddingHorizontal: espacamentos.grande,
  },

  titulo: {
    fontSize: fontes.tituloGrande,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    textAlign: 'center',
    marginBottom: 20,
  },

  cartaoUsuario: {
    backgroundColor: cores.branco,
    borderRadius: espacamentos.raioCard,
    padding: espacamentos.medio,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: cores.borda,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: cores.azulClaro,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: espacamentos.medio,
  },

  inicialAvatar: {
    fontSize: 28,
    fontWeight: 'bold',
    color: cores.azulPrincipal,
  },

  infoUsuario: {
    flex: 1,
  },

  nomeUsuario: {
    fontSize: fontes.subtitulo,
    fontWeight: '700',
    color: cores.textoPrincipal,
  },

  telefoneUsuario: {
    marginTop: 4,
    fontSize: fontes.corpo,
    color: cores.textoSecundario,
  },
});