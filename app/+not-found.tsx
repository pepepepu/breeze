import { Link, Stack } from 'expo-router';
// Link: permite navegação entre telas. Stack: para definir o título da tela

import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// Componentes estilizados para suportar temas claro/escuro

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      {/* Define o título da tela no topo */}

      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen does not exist.</ThemedText>
        {/* Mensagem de erro */}

        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
        {/* Link para voltar para a Home */}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
