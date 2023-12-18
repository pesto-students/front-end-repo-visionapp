import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button, Row, Col } from 'antd';
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
                  title: 'Raised TIckets',
                },
              ]}
            />
            <div className='mainReviewTicketContentArea'>
              <h2> Raised tickets by colony members</h2>
              <div className="reviewTicketContainer">
                <Row gutter={12}>
                  <Col span={6} >
                    <div className="insideColumn">
                      <div className="profileImg">
                        <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' />
                        <h2> Meet Pandya </h2>
                      </div>
                      <div className="profileMsg">
                        <p> He has created the ticket for <strong>Society needs to analyze the issue </strong> regarding the <b> Fund </b> on <b> 31, Dec, 2023</b> where the issue is <b> When people of colony is not able to intrest to collect the Fund</b> click on view button to get more details. </p>
                        <Button type="primary" className="viewBtn" > CHAT</Button>
                      </div>
                    </div>
                  </Col>
                  <Col span={6} >
                    <div className="insideColumn">
                      <div className="profileImg">
                        <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' />
                        <h2> Meet Pandya </h2>
                      </div>
                      <div className="profileMsg">
                        <p> He has created the ticket for <strong>Society needs to analyze the issue </strong> regarding the <b> Fund </b> on <b> 31, Dec, 2023</b> where the issue is <b> When people of colony is not able to intrest to collect the Fund</b> click on view button to get more details. </p>
                        <Button type="primary" className="viewBtn" > CHAT</Button>
                      </div>
                    </div>
                  </Col>
                  <Col span={6} >
                    <div className="insideColumn">
                      <div className="profileImg">
                        <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' />
                        <h2> Meet Pandya </h2>
                      </div>
                      <div className="profileMsg">
                        <p> He has created the ticket for <strong>Society needs to analyze the issue </strong> regarding the <b> Fund </b> on <b> 31, Dec, 2023</b> where the issue is <b> When people of colony is not able to intrest to collect the Fund</b> click on view button to get more details. </p>
                        <Button type="primary" className="viewBtn" > CHAT</Button>
                      </div>
                    </div>
                  </Col>
                  <Col span={6} >
                    <div className="insideColumn">
                      <div className="profileImg">
                        <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' />
                        <h2> Meet Pandya </h2>
                      </div>
                      <div className="profileMsg">
                        <p> He has created the ticket for <strong>Society needs to analyze the issue </strong> regarding the <b> Fund </b> on <b> 31, Dec, 2023</b> where the issue is <b> When people of colony is not able to intrest to collect the Fund</b> click on view button to get more details. </p>
                        <Button type="primary" className="viewBtn" > CHAT</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
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
