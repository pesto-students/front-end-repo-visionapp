import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button, Tabs, Row, Col, Modal, } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './ServiceProviders.scss';
import LFooter from '../../components/Footer/LFooter';
import { useState } from "react";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function ServiceProviders() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='serviceProviders' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboardUser'
                },
                {
                  title: 'Service Providers',
                },
              ]}
            />
            <div className='mainServiceProvidersContentArea'>
              <h2> Choose tabs to see service products</h2>
              <div className="serviceProvidersContainer">
                <div className="tabContainer">
                  <Tabs tabPosition="left" defaultActiveKey="tab1">
                    <Tabs.TabPane tab="Tutor" key="tab1">
                      <Row gutter={12}>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            cover={
                              <img
                                alt="example"
                                src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                              />
                            }>
                            <Meta
                              title="RAMESH PATEL"
                              description="He is a teacher..."
                            />

                            <h5> Location :- <b> Babra, Amreli. </b></h5>
                            <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button>
                          </Card>
                        </Col>
                      </Row>
                      <Modal
                        title="Details of Service Provider"
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                      >
                        <hr />
                        <Row gutter={12}>
                          <Col span={24} >
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <div className="profileName" style={{ textAlign: 'center' }}>
                                <img
                                  alt="example"
                                  width={150}
                                  src="https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png"
                                />
                                <h3 style={{ margin: '0' }}> RAMESH PATEL </h3>

                              </div>
                              <div className="profileDetails" style={{ padding: "10px 20px", textAlign: "center" }}>
                                <p> Ramesh patel is a teacher in private school where he is teaching the maths.<br />
                                  He is expert in mathematical things. <br />He has been received many gold medals in his Life. </p>
                                <Button> CHAT NOW</Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Modal>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Fuel Station" key="tab2">
                      <p> Tab 2</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Stationery" key="tab3">
                      <p> Tab 3</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Electronic Repair" key="tab4">
                      <p> Tab 4</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Hair Salon" key="tab5">
                      <p> Tab 5</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Pharmacy" key="tab6">
                      <p> Tab 6</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Carpenter" key="tab7">
                      <p> Tab 7</p>
                    </Tabs.TabPane>
                  </Tabs>
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

export default ServiceProviders;
