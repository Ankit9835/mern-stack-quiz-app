import React, { useState } from 'react'
import { Col, Form, message, Row, Select, Table } from "antd";
import { Tabs } from "antd";
import { addExam } from '../../../apicalls/exams';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, showLoading } from '../../../redux/loaderSlice';



const AddExams = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.users)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
    const { TabPane } = Tabs;
    const onFinish = async (value) => {
        try {
          dispatch(showLoading())
          const response = await addExam(value,user.token)
          dispatch(hideLoading())
          console.log(response)
          message(`${response.data.message}`)
          navigate('/home')
        } catch (error) {
          console.log(error.message)
        }
    }
    return (
       <>
         <Form layout="vertical" onFinish={onFinish}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Exam Details" key="1">
              <Row gutter={[10, 10]}>
                <Col span={8}>
                  <Form.Item label="Exam Name" name="name">
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Exam Duration" name="duration">
                    <input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Category" name="category">
                    <select name="" id="">
                      <option value="">Select Category</option>
                      <option value="Javascript">Javascript</option>
                      <option value="React">React</option>
                      <option value="Node">Node</option>
                      <option value="MongoDB">MongoDB</option>
                    </select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Total Marks" name="totalMarks">
                    <input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Passing Marks" name="passingMarks">
                    <input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="flex justify-end gap-2">
                <button
                  className="primary-outlined-btn"
                  type="button"
                  
                >
                  Cancel
                </button>
                <button className="primary-contained-btn" type="submit">
                  Save
                </button>
              </div>
            </TabPane>
           
          </Tabs>
        </Form>
       </>
          
      );
}

export default AddExams
