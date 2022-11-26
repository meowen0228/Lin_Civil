import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Space, Button, Popconfirm, Modal, Select, Divider } from 'antd';
import * as API from '../../service/API';

function Order() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchOrderData = async () => {
    const param = {
      User_Name: sessionStorage.getItem('User_Name'),
      token: sessionStorage.getItem('token'),
      id: sessionStorage.getItem('id'),
    };
    const result = await API.getEarthWorkList(param);
    if (result.code === 1) {
      setData(result.data);
    }
  };
  useEffect(() => {
    fetchOrderData();
  }, []);
  const showModal = async (id) => {
    setIsModalOpen(true);
    setDetail(data[id].dataDetail);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const delData = async (id) => {
    const param = {
      User_Name: sessionStorage.getItem('User_Name'),
      token: sessionStorage.getItem('token'),
      orderId: id,
    };
    const result = await API.DeleteOrder(param);
    if (result.code === 1) {
      fetchOrderData(param);
    }
  };
  const columns = [
    {
      title: 'Work_Date',
      dataIndex: 'Work_Date',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'Area',
      dataIndex: 'Area',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'Dump_Truck',
      dataIndex: 'Dump_Truck',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type=""
            icon={<InfoCircleOutlined />}
            onClick={() => showModal(record.ID)}
          />
          <Popconfirm
            title="Are you sure to delete this Data?"
            onConfirm={() => {
              delData(record.ID);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const columnsDetail = [
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'ID',
      align: 'center',
    },
    {
      title: 'Qty',
      dataIndex: 'Qty',
      key: 'ID',
      align: 'center',
    },
  ];
  return (
    <>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'Not Identified',
          },
          {
            value: 'A',
            label: 'A',
          },
        ]}
      />
      <Divider />
      <Table
        dataSource={data}
        columns={columns}
        rowKey={(record) => record.ID}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table
          dataSource={detail}
          columns={columnsDetail}
          rowKey={(record) => record.ID}
          pagination={false}
        />
      </Modal>
    </>
  );
}

export default Order;
