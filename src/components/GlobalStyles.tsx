import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
  a {
    ${tw`text-blue-400 hover:underline`}
  }
`;

export default function GlobalStylesComponent() {
  return (
    <>
      <CustomStyles />
      <BaseStyles />
    </>
  );
}
