import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// Importa os temas claro e escuro, além do provedor de tema

import { useFonts } from 'expo-font';
// Hook para carregar fontes personalizadas

import { Stack } from 'expo-router';
// Define a navegação do tipo Stack (pilha)

import { StatusBar } from 'expo-status-bar';
// Controla o estilo da barra de status (no topo do celular)

import 'react-native-reanimated';
// Import necessário para animações (deve estar fora de funções)

import { useColorScheme } from '@/hooks/useColorScheme';
// Hook customizado que detecta se o sistema está em modo escuro ou claro

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Detecta tema atual do sistema

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // Carrega uma fonte customizada
  });

  if (!loaded) {
    // Evita renderizar antes das fontes serem carregadas
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Aplica o tema baseado na preferência do sistema */}

      <Stack>
        {/* Define as rotas de navegação do app como uma pilha */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* A aba principal (layout de abas), sem mostrar header */}

        <Stack.Screen name="+not-found" />
        {/* Tela exibida quando uma rota não é encontrada */}
      </Stack>

      <StatusBar style="auto" />
      {/* Define o estilo da barra de status */}
    </ThemeProvider>
  );
}
