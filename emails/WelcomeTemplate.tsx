import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components';
// import { CSSProperties } from 'react'; //Another way

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://darlegui-mini-portfolio.netlify.app/">
              https://darlegui-mini-portfolio.netlify.app/
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// const body: CSSProperties = {
//   background: '#fff',
// };

// const heading: CSSProperties = {
//   fontSize: '32px',
// };

export default WelcomeTemplate;
