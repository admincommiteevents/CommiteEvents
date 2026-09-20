import { useThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const { theme, toggleTheme, setTheme } = useThemeContext();
  return {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    toggleTheme,
    setTheme
  };
};

export default useTheme;
