import React, { useEffect, useState } from 'react'
import {
  InfoCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import {
  Table,
  Space,
  Button,
  Popconfirm,
  Modal,
  Select,
  Tag,
  Tabs,
} from 'antd'
import * as API from '../../service/API'
import AreaList from '../../deadData/AreaList'
import ModalWithForm from '../../component/modal/ModalWithForm'

function CableHolePage() {
  const [data, setData] = useState([])
  const [detailIndex, setDetailIndex] = useState(0)
  const [searchArea, setSearchArea] = useState(false)
  const [reloadData, setReloadData] = useState(false)
  const [tableTabIndex, setTableTabIndex] = useState(1)
  const [colTypeFilter, setColTypeFilter] = useState([])
  const [isFormOpen, setIsFromOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchData = async (Area) => {
    let res
    if (tableTabIndex == 1) {
      res = await API.getEarthWorkList({ Area: Area })
    }
    if (tableTabIndex == 2) {
      res = await API.getHorizontalBracingList({ Area: Area })
    }
    if (tableTabIndex === 1) {
      res = await API.getSteelAndFormList({ Area: Area })
    }
    if (res.code === 1) {
      setData(res.data)
      const distincType = new Set(res.data.map((e) => e.Type))
      const newTypeFilter = [...distincType].map((e) => ({ text: e, value: e }))
      setColTypeFilter(newTypeFilter)
    }
  }
  useEffect(() => {
    fetchData(searchArea)
  }, [tableTabIndex, reloadData, searchArea])
  const changeArea = (Area) => {
    setSearchArea(Area)
  }
  const showModal = async (id) => {
    const index = data.map((e) => e.ID).indexOf(id)
    setIsModalOpen(true)
    setDetailIndex(index)
  }
  const changeTableTabIndex = (v) => {
    setTableTabIndex(v)
  }
  const delData = async (id) => {
    console.log(id);
    let res
    if (tableTabIndex == 1) {
      res = await API.delEarthWorkList({ ID: id })
    }
    if (tableTabIndex == 2) {
      res = await API.delHorizontalBracingList({ ID: id })
    }
    if (tableTabIndex === 1) {
      res = await API.delSteelAndFormList({ ID: id })
    }
    if (res.code === 1) {
      fetchData()
    }
  }
  const columns = [
    {
      title: '日期',
      dataIndex: 'Work_Date',
      key: 'ID',
      align: 'center',
      sorter: (a, b) => new Date(a.Work_Date) - new Date(b.Work_Date),
    },
    {
      title: '類型',
      dataIndex: 'Type',
      key: 'ID',
      align: 'center',
      filters: colTypeFilter,
      onFilter: (value, record) => record.Type.indexOf(value) === 0,
    },
    {
      title: '區域',
      dataIndex: 'Area',
      key: 'ID',
      align: 'center',
      render: (_, { Area }) => (
        <>
          {Area.map((tag) => (
            <Tag key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: '內容',
      dataIndex: 'Content',
      key: 'ID',
      align: 'center',
    },
    {
      title: '功能',
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
            title="確定要刪除嗎？"
            onConfirm={() => {
              delData(record.ID)
            }}
            okText="是"
            cancelText="否"
          >
            <Button type="" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ]
  const columnsDetail = [
    {
      title: '類別',
      dataIndex: 'Type',
      key: 'ID',
      align: 'center',
    },
    {
      title: '名稱',
      dataIndex: 'Name',
      key: 'ID',
      align: 'center',
    },
    {
      title: '數量',
      dataIndex: 'Qty',
      key: 'ID',
      align: 'center',
    },
  ]
  const myTable = (
    <Table
      showSorterTooltip={false}
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.ID}
    />
  )
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
        <div>
          <span>
            區域：
          </span>
          <Select
            style={{ width: 100 }}
            placeholder="選擇類型"
            defaultValue="All"
            options={AreaList}
            onChange={changeArea}
          />
        </div>
        <Button type="primary" onClick={() => setIsFromOpen(true)}>
          新增
          <PlusOutlined />
        </Button>
      </div>
      <Tabs
        defaultActiveKey={tableTabIndex}
        onChange={changeTableTabIndex}
        items={[
          {
            label: '大地工程',
            key: '1',
            children: (myTable),
          },
          {
            label: '擋土支撐',
            key: '2',
            children: (myTable),
          },
          {
            label: '結構工程',
            key: '3',
            children: (myTable),
          },
        ]}
      />
      <Modal
        title="詳細內容"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false)
        }}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        {data.length > 0 ? (
          <>
            <div
              style={{
                display: 'flex',
                gap: 20,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <p>
                日期：
                {data[detailIndex].Work_Date}
              </p>
              <p>
                類型：
                {data[detailIndex].Type}
              </p>
              <p>
                區域：
                {data[detailIndex].Area}
              </p>
            </div>
            <Table
              dataSource={data[detailIndex].dataDetail}
              columns={columnsDetail}
              rowKey={(record) => record.ID}
              pagination={false}
            />
          </>
        ) : null}
      </Modal>
      <ModalWithForm
        reloadData={reloadData}
        setReloadData={setReloadData}
        isFormOpen={isFormOpen}
        setIsFromOpen={setIsFromOpen}
      />
    </>
  )
}

export default CableHolePage
