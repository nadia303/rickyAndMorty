import { Flex, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Header } from './commonComponents/Header';
import { Footer } from './commonComponents/Footer/Footer';

function App() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
      }}
    >
      <Header />
      <Content>
        <Flex
          vertical
          style={{
            background: 'grey',
            minHeight: 280,
            padding: 24,
            margin: '0 auto',
            maxWidth: '1280px',
            width: '100%',
          }}
        >
          Content
        </Flex>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
