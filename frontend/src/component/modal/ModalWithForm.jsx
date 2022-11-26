import React from 'react'
import {
  Modal,
  Tabs,
} from 'antd'
import * as API from '../../service/API'
import { EarthForm } from '../form'
import './ModalWithForm.scss'

function ModalWithForm(props) {
  const { reloadData, setReloadData, isFormOpen, setIsFromOpen } = props

  return (
    <Modal
      title="新增項目"
      open={isFormOpen}
      onCancel={() => {
        setIsFromOpen(false)
      }}
      footer={null}
      className="ModalWithForm"
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
                reloadData={reloadData}
                setReloadData={setReloadData}
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
                ]}
                api={API.addSteelAndFormList}
                setIsFromOpen={setIsFromOpen}
                setReloadData={setReloadData}
              />
            ),
          },
        ]}
      />
    </Modal>
  )
}

export default ModalWithForm
