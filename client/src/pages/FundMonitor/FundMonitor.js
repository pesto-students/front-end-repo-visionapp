import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './FundMonitor.scss';
import LFooter from '../../components/Footer/LFooter';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function FundMonitor() {
  const navigate = useNavigate();

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='fundMonitor' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Funds Monitor',
                },
              ]}
            />
            <div className='mainFundMonitorContentArea'>
              <h2> Funds Monitoring Chart</h2>
              <div className="fundMonitorContainer">
                <img src={process.env.PUBLIC_URL + '/underConstruction.png'} alt='logo' />
              </div>

            </div>
          </Content>
          <LFooter />
        </Layout >
      </Space >
    </>
  );
}

export default FundMonitor;
