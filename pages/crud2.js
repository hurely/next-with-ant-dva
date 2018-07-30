import React from 'react';
import MyHeader from '../components/MyHeader';
import axios from '../lib/axios';
import urls from '../lib/urls';

import {Table, Button, Divider, Icon} from 'antd';
import reqwest from 'reqwest';
import Crud from "./crud";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };

         this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                render: name => `${name.first} ${name.last}`,
                width: '20%',
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                filters: [
                    {text: 'Male', value: 'male'},
                    {text: 'Female', value: 'female'},
                ],
                width: '20%',
            }, {
                title: 'Email',
                dataIndex: 'email',
            }, {
                title: 'Action',
                dataIndex: 'id',
                render: (text, record) => (
                    <span>
                              <Divider type="vertical"/>
                              <a href="javascript:;" onClick={() => this.deleteRow(record)}>Delete</a>
                              <Divider type="vertical"/>
                              <a href="javascript:;" className="ant-dropdown-link">
                                More actions <Icon type="down"/>
                                </a>
                </span>
                )
            }];

        //this.handlerClick.bind(this);
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = {...this.state.pagination};
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({loading: true});
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = {...this.state.pagination};
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;


            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }

    componentDidMount() {
        this.fetch();
    }

    deleteRow = (e) => {
        debugger;
        /*this.setState({
            data: []
        });*/
    }

    handlerClick = (e) => {
        debugger;
    }

    render() {
        const columns = this.columns;
        return (
            <MyHeader>
                <Button onClick={this.handlerClick.bind(this)}>go</Button>
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </MyHeader>
        );
    }
}

export default App;