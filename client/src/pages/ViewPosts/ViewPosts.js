import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card, Breadcrumb, Form, Input, Upload, Button, Spin } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, HeartOutlined, HeartFilled, WechatOutlined } from '@ant-design/icons';
import LHeader from '../../components/Header/LHeader';
import './ViewPosts.scss';
import LFooter from '../../components/Footer/LFooter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../features/postDetailsSlice";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function ViewPosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [postDescription, setPostDescription] = useState(null);
  const [postUploadImage, setPostUploadImage] = useState("");

  const { posts, loading } = useSelector((state) => state.post);
  console.log("#AllPost", posts?.data?.allPostDetails[0]?.postDescription);
  // console.log("#AllPost", data.allPostDetails);

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();
  //   try {
  //     console.log("#Creating Post.");
  //     dispatch(createPost(description));
  //     setDescription({
  //       postDescription: ""
  //     });
  //     console.log("#Post Created.");
  //   }
  //   catch (error) {
  //     console.warn("#CreatePost Error", error);
  //     error(error);
  //   }
  // }

  const handleSubmit = (values) => {
    console.log("Post Values :", values.postText + " and " + values.postImg.fileList[0]);

    setPostDescription(values.postText);
    setPostUploadImage(values.postImg.fileList[0]);
    console.log("#setPostDescription", postDescription);
    console.log("#postUploadImage", postUploadImage);

    const formData = new FormData();
    formData.append('postDescription', postDescription);
    formData.append('postUploadImage', postUploadImage);
    dispatch(createPost(formData));
  }

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (loading) {
    return <Flex align="center" gap="middle" justify="center" style={{ height: '100vh' }}><Spin size="large" /></Flex>;
  }


  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <LHeader />
          <Content className='createPostsContent' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboardUser'
                },
                {
                  title: 'View Posts',
                },
              ]}
            />
            <div className='mainPostsContentArea'>

              <div className="leftPostsContentArea">
                <h2> View Posts</h2>
                {/* <div className="postsForm" style={{ background: "White" }}>
                  <div className="imgOfAdmin" >
                    <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={50} />
                  </div>
                  <div className="addFormDetails">
                    <Form onFinish={handleSubmit} >
                      <Form.Item name="postText"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email."
                          },
                          {
                            type: "text",
                            message: "Please enter a valid email."
                          },
                        ]}
                        hasFeedback>
                        <Input
                          // onChange={(e) => setDescription(e.target.value)}
                          // value={description}
                          className='formInput'
                          placeholder="What's happening?" />
                      </Form.Item>
                      <div className="postSection">
                        <Form.Item name="postImg">
                          <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture"
                            maxCount={1}
                            // onChange={(e) => setPostImage(e.target.files[0])}
                            // value={postImage}
                            multiple
                            className="postUpload"
                          >
                            <Button icon={<FileImageOutlined />}></Button>
                          </Upload>
                        </Form.Item>
                        <Button className="postBtn" htmlType="submit"> Post </Button>
                      </div>
                    </Form>


                  </div>
                </div> */}

                {
                  loading ?

                    posts !== [] && posts.map((ele, index) => (
                      <div className="viewPosts">
                        <div className="postHeader" >
                          <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={25} />
                          <h5> Yashkumar Jani</h5>
                          <span> 1 day ago.</span>
                        </div>
                        <div className="postContent">
                          <p key={ele.id} > {ele?.allPostDetails[index].postDescription} </p>
                        </div>
                        <div className="postFooter">
                          {/* <HeartOutlined /> */}
                          <HeartFilled className="likeIcon" /> <span> 10 Likes</span>

                          <WechatOutlined className="commentIcon" /> <span> 2 Comments</span>
                        </div>
                      </div>
                    ))
                    : <div className="viewPosts">Data is not Reflecting here 😒 </div>
                }


              </div>

              <div className="rightPostsContentArea">
                <h2> Activities</h2>
                <div className="postActivities">
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={40} />
                      <h5> Ravi Patel </h5>
                      <p> has liked on your post.</p>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={40} />
                      <h5> Kelu Modi </h5>
                      <p> has commented on your post.</p>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={40} />
                      <h5> Kishan Jani </h5>
                      <p> has liked on your post.</p>
                      <span> 3 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={process.env.PUBLIC_URL + '/profile.png'} alt='logo' width={40} />
                      <h5> Meet Pandya </h5>
                      <p> has commented on your post.</p>
                      <span> 1 week ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
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

export default ViewPosts;