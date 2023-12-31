// import { useNavigate } from "react-router-dom";
import { Layout, Space, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './PageNotFound.scss';
import LFooter from '../../components/Footer/LFooter';

const { Content } = Layout;
// const { Meta } = Card;

function PageNotFound() {
  // const navigate = useNavigate();

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='pageNotFound' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Page Not Found',
                },
              ]}
            />
            <div className='mainPageNotFoundContentArea'>
              <div className="pageNotFoundContainer">
                <img src={process.env.PUBLIC_URL + '/pageNotFound.png'} alt='logo' />
              </div>

            </div>
          </Content>
          <LFooter />
        </Layout >
      </Space >
    </>
  );
}

export default PageNotFound;
