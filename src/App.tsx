import { Flex, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './commonComponents/Footer/Footer';
import { Header } from './commonComponents/Header';
import { Characters } from './pages/Characters';
import { Episodes } from './pages/Episodes';
import { Locations } from './pages/Locations';
import { NotFound } from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Layout className="app-layout">
      <Header />
      <Content className="app-content">
        <Flex vertical>
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Flex>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
