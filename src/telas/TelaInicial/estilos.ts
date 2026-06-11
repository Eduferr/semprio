import { StyleSheet } from 'react-native';

import { coresCards } from '../../estilos/estilosGlobais';
import { cores } from '../../temas/cores';
import { espacamentos } from '../../temas/espacamentos';
import { fontes } from '../../temas/fontes';

export const ALTURA_CABECALHO = 150;

export const estilos = StyleSheet.create({
  cabecalho: {
    top: 10,
    height: ALTURA_CABECALHO,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: espacamentos.grande,
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: cores.fundo,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
    elevation: 4,
    zIndex: 20,
  },

  conteudo: {
    paddingTop: 25,
  },

  infoCabecalho: {
    flex: 1,
    minWidth: 0,
    paddingRight: 12,
  },

  frasePrincipal: {
    fontSize: fontes.pequeno,
    fontWeight: '700',
    color: cores.textoSecundario,
  },

  frasePrincipalPequena: {
    fontSize: fontes.pequeno,
  },

  nomePessoa: {
    marginTop: 3,
    fontSize: fontes.tituloGrande,
    fontWeight: '800',
    color: cores.textoPrincipal,
  },

  nomePessoaPequena: {
    fontSize: fontes.titulo,
  },

  tipoSanguineo: {
    marginTop: 6,
    fontSize: fontes.corpo,
    color: cores.textoSecundario,
  },

  tipoSanguineoValor: {
    fontWeight: '800',
    color: cores.textoPrincipal,
  },

  linhaFamilia: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
  },

  textoFamilia: {
    flexShrink: 1,
    fontSize: fontes.corpo,
    fontWeight: '700',
    color: cores.vermelhoSOS,
  },

  avatarPessoa: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: cores.azulClaro,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D8ECFF',
  },

  avatarPessoaPequeno: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },

  inicialPessoa: {
    fontSize: 40,
    fontWeight: '800',
    color: cores.azulPrincipal,
  },

  badgeCoracao: {
    position: 'absolute',
    right: -2,
    bottom: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: cores.vermelhoSOS,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  cardEmocional: {
    height: 130,
    borderRadius: 24,
    backgroundColor: coresCards.emocional,
    paddingLeft: 20,
    paddingVertical: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  textoCardEmocional: {
    flex: 1,
    zIndex: 2,
  },

  imagemCard: {
    width: 170,
    height: 120,
    marginRight: -18,
  },

  fraseCard: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '800',
    color: '#7F1D1D',
    marginBottom: 12,
  },

  tituloSecao: {
    fontSize: fontes.subtitulo,
    fontWeight: '800',
    color: cores.textoPrincipal,
    marginBottom: 14,
  },

  gradeCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },

  cardAtalho: {
    width: '48%',
    minHeight: 140,
    borderRadius: 22,
    padding: 18,
    justifyContent: 'space-between',
    elevation: 2,
  },

  cardDesabilitado: {
    opacity: 0.55,
    elevation: 0,
  },

  tituloCard: {
    marginTop: 12,
    fontSize: fontes.corpo,
    fontWeight: '800',
    color: cores.textoPrincipal,
  },

  descricaoCard: {
    marginTop: 4,
    fontSize: fontes.pequeno,
    color: cores.textoSecundario,
  },

  textoDesabilitado: {
    color: '#8A8A8A',
  },
});