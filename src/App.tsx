import { Flex, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import { Route, Routes } from 'react-router-dom';

import { Header } from './commonComponents/Header';
import { Footer } from './commonComponents/Footer/Footer';
import { Episodes } from './pages/Episodes';
import { Characters } from './pages/Characters';
import './index.css';
import { Locations } from './pages/Locations';

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
            background: 'rgb(255, 255, 255)',
            minHeight: 280,
            padding: 34,
            margin: '0 auto',
            maxWidth: 1280,
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </Flex>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
