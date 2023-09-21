import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const Failed = () => (
  <Result
    status="error"
    title=" Email Verification Failed"
    subTitle="Your Link not Valid Please generate a new link and try again."
  >
   
  </Result>
);
export default Failed;