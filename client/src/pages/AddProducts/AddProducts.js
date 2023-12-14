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
  const modifiedData = gridData.map(({ ...item }) => ({
    ...item,
    key: item.id
  }));

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
      return modifiedData.length >= 1 ? (
        <Space>
          <Popconfirm
            title="Are you sure want to delete?"
            onConfirm={() => handleDelete(record)}>
            <Button danger icon={<DeleteOutlined />} disabled={editable}></Button>
          </Popconfirm>
          {editable ? (
            <span>
              <Space>
                <Button type="primary" onClick={() => saveEdit(record.key)} style={{ marginRight: 2 }} > Save</Button>
                <Popconfirm title="Are you sure want to Cancel?" onConfirm={() => cancelEdit()}>
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
    const dataSource = [...modifiedData];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filteredData);
  };

  //Editing Function
  const [editRowKey, setEditRowKey] = useState("");
  const isEditing = (record) => {
    return record.key === editRowKey;
  }
  const cancelEdit = () => {
    setEditRowKey('');
  }
  const saveEdit = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...modifiedData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setGridData(newData);
        setEditRowKey('');
      } else {
        newData.push(row);
        setGridData(newData);
        setEditRowKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

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

  //Edit data on input field of Form
  const mergeColumns = columns.map((col) => {
    if (!col.editTable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        // inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  });

  //Visible Editable cell
  // const EditableCell = ({ editing, dataIndex, title, inputType, record, children, ...restProps }) => {
  const EditableCell = ({ editing, dataIndex, title, record, children, ...restProps }) => {
    const input = <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.item name={dataIndex} style={{ margin: 0 }} rules={[{
            required: true,
            message: `Please enter some value in ${title} field`
          }]}>
            {input}
          </Form.item>
        ) : (children)}
      </td>
    )
  };

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
                    // columns={columns}
                    columns={mergeColumns}
                    // components={{
                    //   body: {
                    //     cell: EditableCell,
                    //   },
                    // }}
                    dataSource={modifiedData}
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
