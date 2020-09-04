import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
  
    colors: {
      primary: string;
      secundary: string;
  
      bgPrimary: string;
      bgSecundary: string;
  
      text: string;
      textSecundary: string;
    },
  }
}