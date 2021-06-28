import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'white')(props),
        bg: mode('white', 'teal.900')(props),
      },
    }),
  },
};

const customTheme = extendTheme(overrides);
console.log(customTheme);

export default customTheme;
