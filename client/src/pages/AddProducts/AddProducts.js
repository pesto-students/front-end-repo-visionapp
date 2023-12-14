import { useNavigate } from "react-router-dom";
import {
  Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload,
  Button, Select, Table, Popconfirm
} from 'antd';
import {
  HomeOutlined, BookOutlined, LockOutlined, CloudUploadOutlined, FileImageOutlined,
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './AddProducts.scss';
import LFooter from '../../components/Footer/LFooter';
import FormItemInput from "antd/es/form/FormItemInput";
import axios from "axios";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Option } = Select;

function AddProducts() {
  const navigate = useNavigate();

  //value is coming in console but...
  const handleSubmit = async (values) => {
    console.log({ values });
  }

  //Table code.
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);

  //Load data in Table
  const loadDataInTable = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setGridData(response.data);
    setLoading(false);
  }

  //useEffect to append data in State.
  useEffect(() => {
    loadDataInTable();
  }, []);

  //modified Data with Key in Table
  // const modifiedData = gridData.map()

  //Define columns for Table
  const columns = [{
    title: "ID",
    dataIndex: "id",
    fixed: 'top',
    width: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    editTable: true,
    fixed: 'top',
    width: 250,
  },
  {
    title: "Email",
    dataIndex: "email",
    editTable: true,
    fixed: 'top',
    width: 200,
  },
  {
    title: "Body",
    dataIndex: "body",
    editTable: true,
    fixed: 'top',
    width: 500,
  },
  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    fixed: 'top',
    render: (_, record) => {
      const editable = isEditing(record);
      return gridData.length >= 1 ? (
        <Space>
          <Popconfirm
            title="Are you sure want to delete?"
            onConfirm={() => handleDelete(record)} disabled={editable} >
            <Button danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
          {editable ? (
            <span>
              <Space>
                <Button ghost type="primary" onClick={() => saveEdit(record.key)} style={{ marginRight: 2 }} > Save</Button>
                <Popconfirm title="Are you sure want to Cancel?" onConfirm={cancelEdit}>
                  <Button danger>Cancel</Button>
                </Popconfirm>
              </Space>
            </span>
          ) : (
            <Button ghost type="primary"
              icon={<EditOutlined />}
              onClick={() => doEdit(record)} ></Button>
          )
          }
        </Space >
      ) : null;
    }
  }];

  //Delete Function
  const handleDelete = (value) => {
    const dataSource = [...gridData];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filteredData);
  };

  //Editing Function
  const [editRowKey, setEditRowKey] = useState("");
  const isEditing = (record) => {
    return record.key === editRowKey;
  }
  const cancelEdit = () => {

  }
  const saveEdit = () => {

  }
  const doEdit = (record) => {
    form.setFieldsValue({
      name: "",
      email: "",
      body: "",
      ...record
    });
    setEditRowKey(record.key);
  }

  //Editing Data in Form
  const [form] = Form.useForm();

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='addProducts' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Add Products',
                },
              ]}
            />
            <div className='mainAddProductsContentArea'>
              <h2> Add Products</h2>
              <div className="addProductsContainer">
                <Form onFinish={handleSubmit} autoComplete="off">

                  <Flex gap="small" className='addProductsFormArea' justify={'center'} align={'center'} vertical>
                    <Form.Item name="productName">
                      <Input
                        className='formInput'
                        placeholder="Enter Product Name"
                        prefix={<BookOutlined />} />
                    </Form.Item>

                    <Form.Item name="productPrice">
                      <Input
                        className='formInput'
                        placeholder="Enter Product Price"
                        prefix={<b>&#8377;</b>} />
                    </Form.Item>

                    <Form.Item
                      name="productType"
                    >
                      <Select className='formInput' placeholder="select Product Type">
                        <Option value="woodwork">Woodwork</Option>
                        <Option value="pottery">Pottery</Option>
                        <Option value="leather">Leather</Option>
                        <Option value="jute">Jute</Option>
                        <Option value="shell">Shell</Option>
                        <Option value="phulkaris">Phulkaris</Option>
                        <Option value="zardozi">Zardozi</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="poductImage">
                      <Upload
                        action="/upload.do"
                        listType="picture"
                        maxCount={1}
                        // onChange={(e) => setPostImage(e.target.files[0])}
                        // value={postImage}
                        multiple
                        className="formUpload"
                      >
                        <div>
                          <Button icon={<FileImageOutlined />} style={{ fontWeight: "lighter" }}> Upload Product Image</Button>
                        </div>
                      </Upload>
                    </Form.Item>

                    {/* <Form.Item className='formUpload' valuePropName="fileList">
                      <Upload htmltype="file"
                        // fileList={profileImg}
                        // onChange={(e) => setProfileImg(e.target.files[0])}
                        // value={profileImg}
                        // name={profileImg}
                        action="/upload.do"
                        listType="picture-card">
                        <div>
                          <CloudUploadOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                      </Upload>
                    </Form.Item> */}

                    <Form.Item>
                      <Button className='formButton' htmlType="submit">Add Products</Button>
                    </Form.Item>
                  </Flex>
                </Form>
              </div>
              <h2> List of Products</h2>
              <div className="listOfProductsContainer">
                <Form form={form} component={false}>
                  <Table
                    columns={columns}
                    dataSource={gridData}
                    bordered
                    loading={loading}
                    scroll={{
                      y: 200,
                    }}
                  />
                </Form>
              </div>
            </div>
          </Content>
          <LFooter />
        </Layout >
      </Space >
    </>
  );
}

export default AddProducts;
