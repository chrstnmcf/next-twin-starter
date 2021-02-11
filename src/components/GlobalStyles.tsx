import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
  a {
    ${tw`text-blue-400 hover:underline`}
  }
`;

export default function GlobalStylesComponent() {
  return (
    <>
      <BaseStyle />
      <GlobalStyles />
    </>
  );
}
