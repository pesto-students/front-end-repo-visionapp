import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button, Tabs, Row, Col, } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './HomemadeProducts.scss';
import LFooter from '../../components/Footer/LFooter';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllProducts, addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity
} from "../../features/productDetailsSlice";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function HomemadeProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.product);

  //Filter Tutor providers from APIs
  const woodworkList = productData?.products?.data?.allProductsDetails.filter(
    (el) => el.productType == "woodwork", []
  );

  //cart Items
  const { allCart, totalQuantity, totalPrice } = useSelector((state) => state.product);
  console.log("#Cart", allCart);


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [allCart]);


  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='homemadeProducts' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboardUser'
                },
                {
                  title: 'Homemade Products',
                },
              ]}
            />
            <div className='mainHomemadeProductsContentArea'>
              <h2> Choose tabs to see Homemade products</h2>
              <div className="homemadeProductsContainer">
                <div className="leftContainer">
                  <Tabs tabPosition="left" defaultActiveKey="tab1">
                    <Tabs.TabPane tab="Woodwork" key="tab1">
                      {productData.loading && <div>Loading </div>}
                      {!productData.loading && productData.error ? <div>Error : {productData.error} </div> : null}
                      {!productData.loading && productData.products?.data?.allProductsDetails.length ? (
                        <Row gutter={24}>
                          {woodworkList.map((item, index) => (
                            <Col span={6}>
                              <Card
                                key={item._id}
                                bordered={false}
                                cover={
                                  <img
                                    alt="example"
                                    src={item.productImage}
                                  />
                                }>
                                <Meta
                                  title={item.productName}
                                  description={item.productType}
                                />

                                <p> Price :- <b>₹ &nbsp; {item.productPrice} </b></p>
                                <Button ghost type="primary" onClick={() => dispatch(addToCart(item))} > ADD TO CART</Button>
                              </Card>
                            </Col>
                          ))
                          }
                        </Row>
                      ) : null}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Pottery" key="tab2">
                      <p> Tab 2</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Leather" key="tab3">
                      <p> Tab 3</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Jute" key="tab4">
                      <p> Tab 4</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Shell" key="tab5">
                      <p> Tab 5</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Phulkaris" key="tab6">
                      <p> Tab 6</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Zardozi" key="tab7">
                      <p> Tab 7</p>
                    </Tabs.TabPane>
                  </Tabs>
                </div>
                <div className="rightContainer">
                  <h4> Shopping Cart</h4>
                  <hr />

                  <Row gutter={12}>
                    {allCart?.map((item) => (
                      <>
                        <Col span={24}>
                          <Card
                            key={item._id}
                            className="shoppingCartBox"
                            bordered={true}>
                            <div className="startCart">
                              <img alt="Review Tickets" src={item.productImage} width={35} />
                              <h4> {item.productName}</h4>
                            </div>
                            <div className="endCard">
                              <div className="quantity">
                                <PlusCircleOutlined onClick={() =>
                                  dispatch(increaseItemQuantity(item._id))
                                } />
                                <p>&nbsp;<b>{item.productQuantity} </b> &nbsp;</p>
                                <MinusCircleOutlined onClick={() =>
                                  dispatch(decreaseItemQuantity(item._id))
                                } />
                              </div>
                              <div className="price">
                                <b>{item.productPrice}</b>
                                <label onClick={() => dispatch(removeItem(item._id))}> Remove </label>
                              </div>
                            </div>
                          </Card>
                        </Col>

                      </>
                    ))}
                  </Row>

                  <hr />

                  <Row gutter={12}>
                    <Col span={24}>
                      <Card
                        className="shoppingCartBox"
                        bordered={false}>
                        <div className="totalAmount">
                          <div className="totalQ">
                            <p> <strong> Sub-total : </strong> </p>
                            <span> {totalQuantity} items</span>
                          </div>
                          <div className="totalP">
                            <h2> {totalPrice} /-</h2>
                          </div>
                        </div>
                      </Card>
                    </Col>

                    <Col span={24}>
                      <Button className="checkItOut"> CHECKOUT </Button>
                    </Col>
                  </Row>
                  <h4></h4>
                </div>

              </div>

            </div>
          </Content>
          <LFooter />
        </Layout >
      </Space >
    </>
  );
}

export default HomemadeProducts;
