import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { Layout, Space, Flex } from 'antd';
import { Button } from 'antd';
import LFooter from '../../components/Footer/LFooter';
import './LHeader.scss';
import { useEffect } from "react";

const { Header, Content, Footer } = Layout;

function LHeader() {
  const navigate = useNavigate();
  const firebase = useFirebase();

  // useEffect(() => {
  //   if (firebase.isLoggedIn) {
  //     navigate('/dashboard');
  //   }
  //   else {
  //     navigate('/signin');
  //   }
  // }, [firebase, navigate]);
  return (
    <div className="App">

      <Header className='mainHeader'>
        <Flex className='mainContentArea' justify={'space-between'} align={'center'}>
          <Flex gap="small" justify={'flex-start'} align={'center'} wrap="wrap">
            <img src={process.env.PUBLIC_URL + '/Vision.png'} alt='logo' width={90} />
            <h1 className="brandName" style={{ margin: "0rem" }}> VISION APP</h1>
          </Flex>
          <Flex gap="small" justify={'flex-end'} align={'center'} wrap="wrap">
            <Button className='logoutBtn' onClick={() => { firebase.logoutUser(); navigate("/")  }} >logout</Button>
          </Flex>
        </Flex>
      </Header>
    </div >
  );
}

export default LHeader;
