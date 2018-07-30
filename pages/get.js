
import React from 'react';
import { Button,Timeline } from 'antd';

import MyHeader from '../components/MyHeader';

import urls from '../lib/urls';
import axios from '../lib/axios';
import { bmobConfig } from '../lib/config';

import qs from 'qs';

const config = {
  headers: {
    'X-Bmob-Application-Id': bmobConfig.applicationId,
    'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
    'Content-Type': 'application/json'
  }
}


const myStyle = {
  h1: {
    textAlign: "center"
  }
}

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'kung',
      data: []
    }
  }

  get = async (e) => {
    let data = await axios.get('http://localhost:3001/');
    console.log(data);
  }

  render() {

    return (
      <MyHeader title="get">
        <h1 style={myStyle.h1}>I'm {this.state.name}</h1>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        <Button onClick={this.get} type="primary">get</Button>
      </MyHeader>
    );
  }
}


export default NormalLoginForm;