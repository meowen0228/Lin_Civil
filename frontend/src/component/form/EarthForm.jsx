import React from 'react'
import {
  Button,
  Select,
  Divider,
  Form,
  DatePicker,
  Input,
  InputNumber,
  Col,
  Row,
  Space,
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import AreaList from '../../deadData/AreaList'

function EarthForm(props) {
  const checkAreaList = AreaList.map((e) => e.key)
  const allIndex = checkAreaList.indexOf('All')
  if (allIndex !== -1) {
    AreaList.splice(allIndex, 1)
  }
  const {
    workType,
    api,
    setIsFromOpen,
    reloadData,
    setReloadData,
    initialValues,
  } = props
  const { TextArea } = Input
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const res = await api(values)
    if (res.code) {
      setIsFromOpen(false)
      setReloadData(!reloadData)
      form.resetFields()
    }
  }

  return (
    <Form form={form} onFinish={onFinish} initialValues={initialValues}>
      <Row justify="space-around">
        <Col xs={24} md={10}>
          <Form.Item
            label="工作類型"
            name="type"
            rules={[{ required: true, message: '請選擇類型!' }]}
          >
            <Select placeholder="選擇類型" options={workType} />
          </Form.Item>
          <Form.Item
            label="工作日期"
            name="workDate"
            rules={[{ required: true, message: '請選擇日期!' }]}
          >
            <DatePicker placeholder="選擇日期" />
          </Form.Item>
          <Form.Item
            label="區域"
            name="area"
            rules={[{ required: true, message: '請選擇區域!' }]}
          >
            <Select
              placeholder="選擇區域"
              mode="multiple"
              allowClear
              // eslint-disable-next-line consistent-return
              filterSort={(a, b) => {
                if (
                  a.label === AreaList[0].label ||
                  b.label === AreaList[0].label
                )
                  // eslint-disable-next-line
                  return 0
              }}
              options={AreaList}
            />
          </Form.Item>
          <Form.Item
            label="工作內容"
            name="content"
            rules={[{ required: true, message: '請填寫工作內容!' }]}
          >
            <TextArea rows={4} showCount maxLength={100} />
          </Form.Item>
          <Form.Item label="備註" name="Note">
            <TextArea rows={1} showCount maxLength={100} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <div style={{ marginBottom: 20 }}>子項目：</div>
          <Form.List
            name="detail"
            rules={[
              {
                // eslint-disable-next-line consistent-return
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error('至少一組詳細資料'))
                  }
                },
              },
            ]}
          >
            {(data, { add, remove }, { errors }) => (
              <>
                {data.map((f) => (
                  <Space
                    key={f.key}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      name={[f.name, 'type']}
                      rules={[
                        {
                          required: true,
                          message: '請選擇類別',
                        },
                      ]}
                    >
                      <Select
                        style={{ width: 80 }}
                        options={[
                          { value: '機具' },
                          { value: '人員' },
                          { value: '材料' },
                        ]}
                        placeholder="機具"
                      />
                    </Form.Item>
                    <Form.Item
                      name={[f.name, 'Name']}
                      rules={[
                        {
                          required: true,
                          message: '請輸入名稱',
                        },
                      ]}
                    >
                      <Input placeholder="名稱" maxLength={10} />
                    </Form.Item>
                    <Form.Item
                      name={[f.name, 'qty']}
                      rules={[
                        {
                          required: true,
                          message: '請輸入數量',
                        },
                      ]}
                    >
                      <InputNumber min={1} placeholder="1" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(f.name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    新增項目
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Form.Item style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EarthForm
