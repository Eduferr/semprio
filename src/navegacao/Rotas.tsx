import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TelaAjuda } from '../telas/TelaAjuda';
import { TelaConfiguracoes } from '../telas/TelaConfiguracoes';
import { TelaConsultas } from '../telas/TelaConsultas';
import { TelaFamilia } from '../telas/TelaFamilia';
import { TelaInicial } from '../telas/TelaInicial';
import { TelaMedicamentos } from '../telas/TelaMedicamentos';
import { TelaPerfil } from '../telas/TelaPerfil';
import { TelaPrivacidade } from '../telas/TelaPrivacidade';
import { TelaPromocoes } from '../telas/TelaPromocoes';
import { TelaSaude } from '../telas/TelaSaude';
import { TelaRestricoes } from '../telas/TelaRestricoes'; 

import { TiposRotas } from './tiposRotas';

const Pilha = createNativeStackNavigator<TiposRotas>();

export function Rotas() {
  return (
    <NavigationContainer>
      <Pilha.Navigator
        initialRouteName="TelaInicial"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Pilha.Screen name="TelaInicial" component={TelaInicial} />
        <Pilha.Screen name="TelaPerfil" component={TelaPerfil} />
        <Pilha.Screen name="TelaConfiguracoes" component={TelaConfiguracoes} />
        <Pilha.Screen name="TelaFamilia" component={TelaFamilia} />
        <Pilha.Screen name="TelaAjuda" component={TelaAjuda} />
        <Pilha.Screen name="TelaPrivacidade" component={TelaPrivacidade} />

        <Pilha.Screen name="TelaMedicamentos" component={TelaMedicamentos} />
        <Pilha.Screen name="TelaConsultas" component={TelaConsultas} />
        <Pilha.Screen name="TelaSaude" component={TelaSaude} />
        <Pilha.Screen name="TelaPromocoes" component={TelaPromocoes} />
        <Pilha.Screen name="TelaRestricoes" component={TelaRestricoes} />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}