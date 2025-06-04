import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native'; // Hook nativo que detecta se o sistema está em modo claro ou escuro

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false); // Garante que o tema só será definido após o componente ser montado (útil para SSR)

  useEffect(() => {
    setHasHydrated(true); // Ativa a flag após o primeiro render
  }, []);

  const colorScheme = useRNColorScheme(); // Pega o tema (light | dark) do sistema operacional

  if (hasHydrated) {
    return colorScheme; // Só retorna o tema real após o componente ser "hidratado"
  }

  return 'light'; // Caso ainda não esteja hidratado, retorna 'light' por padrão
}
