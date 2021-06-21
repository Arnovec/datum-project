import React from 'react';
import 'antd/dist/antd.css';
import { Popover /*, Button */} from 'antd';

export default function Ppvr() {
  const state = {
    visible: true,
  };

  const hide = () => {
    state.visible = false;
  };

  const handleVisibleChange = (visible: boolean) => {
    state.visible = visible;
  };

  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={state.visible}
      onVisibleChange={handleVisibleChange}
    >
    <div></div>
    </Popover>
  );
}