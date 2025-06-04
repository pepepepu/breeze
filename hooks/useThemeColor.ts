/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors'; // Importa um objeto com cores definidas para tema claro e escuro
import { useColorScheme } from '@/hooks/useColorScheme'; // Hook customizado para detectar o tema atual (claro ou escuro)

// Hook que retorna uma cor baseada no tema atual
export function useThemeColor(
  props: { light?: string; dark?: string }, // Permite passar manualmente uma cor para cada tema
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark // Nome da cor a ser buscada em Colors
) {
  const theme = useColorScheme() ?? 'light'; // Usa o hook de tema (ou 'light' como padrão)
  const colorFromProps = props[theme]; // Tenta pegar a cor manual passada via props

  if (colorFromProps) {
    return colorFromProps; // Se o usuário passou uma cor diretamente, usa ela
  } else {
    return Colors[theme][colorName]; // Senão, usa a cor padrão do objeto Colors com base no tema
  }
}
