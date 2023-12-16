import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button, Tabs, Row, Col, } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './HomemadeProducts.scss';
import LFooter from '../../components/Footer/LFooter';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function HomemadeProducts() {
  const navigate = useNavigate();

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
                      <Row gutter={12}>
                        <Col span={6}>
                          <Card
                            bordered={false}
                            cover={
                              <img
                                alt="example"
                                src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040"
                              />
                            }>
                            <Meta
                              title="Decorative Utility Box"
                              description="This is the description"
                            />

                            <p> Price :- <b>399/- </b></p>
                            <Button ghost type="primary"> ADD TO CART</Button>
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            bordered={false}
                            cover={
                              <img
                                alt="example"
                                src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040"
                              />
                            }>
                            <Meta
                              title="Decorative Utility Box"
                              description="This is the description"
                            />

                            <p> Price :- <b>399/- </b></p>
                            <Button ghost type="primary"> ADD TO CART</Button>
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            bordered={false}
                            cover={
                              <img
                                alt="example"
                                src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040"
                              />
                            }>
                            <Meta
                              title="Decorative Utility Box"
                              description="This is the description"
                            />

                            <p> Price :- <b>399/- </b></p>
                            <Button ghost type="primary"> ADD TO CART</Button>
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            bordered={false}
                            cover={
                              <img
                                alt="example"
                                src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040"
                              />
                            }>
                            <Meta
                              title="Decorative Utility Box"
                              description="This is the description"
                            />

                            <p> Price :- <b>399/- </b></p>
                            <Button ghost type="primary"> ADD TO CART</Button>
                          </Card>
                        </Col>
                      </Row>
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
                    <Col span={24}>
                      <Card
                        className="shoppingCartBox"
                        bordered={true}>
                        <div className="startCart">
                          <img alt="Review Tickets" src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040" width={35} />
                          <h4> Decorative Utility Box</h4>
                        </div>
                        <div className="endCard">
                          <div className="quantity">
                            <PlusCircleOutlined />
                            <p>&nbsp;<b> 1 </b> &nbsp;</p>
                            <MinusCircleOutlined />
                          </div>
                          <div className="price">
                            <b> 399/-</b>
                            <a href=""> Remove </a>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col span={24}>
                      <Card
                        className="shoppingCartBox"
                        bordered={true}>
                        <div className="startCart">
                          <img alt="Review Tickets" src="https://theindiacrafthouse.com/cdn/shop/products/Wooden_Decorative_Jewellery_Box_-_WDJBA_1024x1024@2x.JPG?v=1579729040" width={35} />
                          <h4> Decorative Utility Box</h4>
                        </div>
                        <div className="endCard">
                          <div className="quantity">
                            <PlusCircleOutlined />
                            <p>&nbsp;<b> 1 </b> &nbsp;</p>
                            <MinusCircleOutlined />
                          </div>
                          <div className="price">
                            <b> 399/-</b>
                            <a href=""> Remove </a>
                          </div>
                        </div>
                      </Card>
                    </Col>
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
                            <span> 2 items</span>
                          </div>
                          <div className="totalP">
                            <h2> 798/-</h2>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <hr />
                  <Row gutter={12}>
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
