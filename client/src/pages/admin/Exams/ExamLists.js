import { message, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listExams } from "../../../apicalls/exams";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
const ExamLists = () => {
const navigate = useNavigate()
const [exams, setExams] = React.useState([]);
const dispatch = useDispatch();

const getAllExams = async () => {
    try {
        const exams = await listExams()
        console.log('all exams',exams.exam)
        setExams(exams.exam)
    } catch (error) {
        console.log(error)
    }
}

const columns = [
    {
      title: "Exam Name",
      dataIndex: "name",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <i
            className="ri-pencil-line"
            onClick={() => navigate(`/admin/exams/edit/${record._id}`)}
          ></i>
          <i
            className="ri-delete-bin-line"
          ></i>
        </div>
      ),
    },
  ];

useEffect(() => {
    getAllExams()
},[])

  return (
    <div>
      <div className="flex justify-between mt-2 items-end">

    Exams
    <pre>
    </pre>
        <button
          className="primary-outlined-btn flex items-center"
          onClick={() => navigate("/admin/add-exams")}
        >
          <i className="ri-add-line"></i>
          Add Exam
        </button>
      </div>
      <div className="divider"></div>

      <Table columns={columns} dataSource={exams} />
    </div>
  )
}

export default ExamLists
