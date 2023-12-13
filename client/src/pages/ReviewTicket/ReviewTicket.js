import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './ReviewTicket.scss';
import LFooter from '../../components/Footer/LFooter';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function ReviewTicket() {
  const navigate = useNavigate();

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='reviewTicket' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Create Posts',
                },
              ]}
            />
            <div className='mainReviewTicketContentArea'>
              <h2> Raised tickets by colony members</h2>
              <div className="reviewTicketContainer">
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

export default ReviewTicket;
