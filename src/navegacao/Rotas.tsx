import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TelaInicial } from '../telas/TelaInicial';
import { TelaPerfil } from '../telas/TelaPerfil';
import { TelaConfiguracoes } from '../telas/TelaConfiguracoes';
import { TelaFamilia } from '../telas/TelaFamilia';
import { TelaAjuda } from '../telas/TelaAjuda';
import { TelaPrivacidade } from '../telas/TelaPrivacidade';

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
            </Pilha.Navigator>
        </NavigationContainer>
    );
}