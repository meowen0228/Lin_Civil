import React from 'react'
import { Modal, Tabs } from 'antd'
import * as API from '../../service/API'
import { EarthForm } from '../form'
import './ModalWithForm.scss'

function ModalWithForm(props) {
  const { setReloadData, isFormOpen, setIsFromOpen } = props

  return (
    <Modal
      title="新增項目"
      open={isFormOpen}
      onCancel={() => {
        setIsFromOpen(false)
      }}
      footer={null}
      className="ModalWithForm"
      destroyOnClose
    >
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: '大地工程',
            key: '1',
            children: (
              <EarthForm
                workType={[
                  {
                    value: '開挖',
                  },
                  {
                    value: '回填',
                  },
                ]}
                api={API.addEarthWorkList}
                setIsFromOpen={setIsFromOpen}
                setReloadData={setReloadData}
                initialValues={{
                  Type: '開挖',
                  detail: [
                    {
                      Type: '機具',
                      Name: '挖土機',
                      Qty: 1,
                    },
                  ],
                }}
              />
            ),
          },
          {
            label: '擋土支撐',
            key: '2',
            children: (
              <EarthForm
                workType={[
                  {
                    value: '水平支撐',
                  },
                  {
                    value: '鋼板樁',
                  },
                ]}
                api={API.addHorizontalBracingList}
                setIsFromOpen={setIsFromOpen}
                setReloadData={setReloadData}
                initialValues={{
                  detail: [
                    {
                      Type: '機具',
                    },
                  ],
                }}
              />
            ),
          },
          {
            label: '結構工程',
            key: '3',
            children: (
              <EarthForm
                workType={[
                  {
                    value: '鋼筋',
                  },
                  {
                    value: '模板',
                  },
                  {
                    value: '混凝土',
                  },
                  {
                    value: '雜項',
                  },
                ]}
                api={API.addSteelAndFormList}
                setIsFromOpen={setIsFromOpen}
                setReloadData={setReloadData}
                initialValues={{
                  detail: [
                    {
                      Type: '人員',
                      Name: '泰工',
                      Qty: 1,
                    },
                    {
                      Type: '人員',
                      Name: '台工',
                      Qty: 1,
                    },
                  ],
                }}
              />
            ),
          },
        ]}
      />
    </Modal>
  )
}

export default ModalWithForm
