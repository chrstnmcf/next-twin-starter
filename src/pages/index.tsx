import tw, { styled } from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';

import vercelLogo from '../../public/vercel.svg';

const Grid = tw.div`
  flex justify-center items-center flex-col mt-12 w-full max-w-screen-md
  sm:(flex-row flex-wrap)
`;

const Card = styled.a(() => [
  tw`flex-auto m-4 p-6 text-left`,
  tw`border border-gray-200 rounded-xl`,
  tw`transition-colors no-underline hover:(text-blue-400 border-blue-400 no-underline)`,
  `flex-basis: 45%; color: inherit;`,
]);

export default function Home() {
  return (
    <div tw="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex p-20 flex-col justify-center items-center">
        <h1 tw="m-0 text-6xl font-bold text-center">
          Welcome to{' '}
          <a href="https://nextjs.org" tw="text-blue-600 no-underline hover:underline">
            Next.js!
          </a>
        </h1>

        <p tw="text-center text-xl mt-12">
          With <a href="https://tailwindcss.com/">TailwindCSS</a>,{' '}
          <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a>,{' '}
          <a href="https://styled-components.com/">styled-components</a> and more!
        </p>

        <p tw="text-center text-2xl mt-6">
          Get started by editing <code tw="bg-gray-50 rounded-md p-3 text-lg font-mono">src/pages/index.js</code>
        </p>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <h3 tw="mb-4 text-2xl font-bold">Documentation &rarr;</h3>
            <p tw="text-lg">Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h3 tw="mb-4 text-2xl font-bold">Learn &rarr;</h3>
            <p tw="text-lg">Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <h3 tw="mb-4 text-2xl font-bold">Examples &rarr;</h3>
            <p tw="text-lg">Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3 tw="mb-4 text-2xl font-bold">Deploy &rarr;</h3>
            <p tw="text-lg">Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </Card>
        </Grid>
      </main>

      <footer tw="w-full h-24 flex justify-center items-center border-t border-gray-300">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          tw="flex justify-center items-center hover:no-underline"
        >
          Powered by <Image src={vercelLogo} alt="Vercel Logo" height={16} tw="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
}
