import React from 'react';
import MyHeader from '../../components/MyHeader';
import axios from '../../lib/axios';
import urls from '../../lib/urls';

import {Table, Button, Divider, Icon, Modal, Form, Input} from 'antd';

const {Column, ColumnGroup} = Table;
const FormItem = Form.Item;



const myStyle = {
    body: {
        width: '800px',
        margin: '10px auto'
    }
}

const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            firstName: Form.createFormField({
                ...props.firstName,
                value: props.firstName.value,
            }),
            lastName: Form.createFormField({
                ...props.lastName,
                value: props.lastName.value,
            }),
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})((props) => {
    const {getFieldDecorator} = props.form;
    return (
        <Form layout="inline">

            <FormItem label="firstName">
                {getFieldDecorator('firstName', {
                    rules: [{required: true, message: 'Username is required!'}],
                })(<Input/>)}
            </FormItem>
            <FormItem label="lastName">
                {getFieldDecorator('lastName', {
                    rules: [{required: true, message: 'lastName is required!'}],
                })(<Input/>)}
            </FormItem>
        </Form>
    );
});

class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                key: '1',
                firstName: 'John',
                lastName: 'Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                firstName: 'Jim',
                lastName: 'Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                firstName: 'Joe',
                lastName: 'Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }],
            visible: false,
            info: {
                key: {value: ''},
                firstName: {value: ''},
                lastName: {value: ''},
                age: {value: ''},
                address: {value: ''}
            },
            row:{
                key: '',
                firstName: '',
                lastName: '',
                age: '',
                address: ''
            }
        };

        this.columns = [
            {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName',
            }, {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName',
            }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: 'Action',
                dataIndex: 'action',
                render: (text, record) => (
                    <span>
                              <Divider type="vertical"/>
                              <a href="javascript:;" onClick={() => this.deleteRow(record)}>删除</a>
                              <Divider type="vertical"/>
                              <a href="javascript:;" onClick={() => this.showDetail(record)}
                                 className="ant-dropdown-link">
                                修改 <Icon type="down"/>
                                </a>
                            </span>
                )
            }];
    }


    handleTableChange = (pagination, filters, sorter) => {
        this.setState({
            pagination: 1,

        });
        debugger
    }

    deleteRow(e) {
        let firstName = e.firstName;
        const dataSource = [...this.state.data];
        this.setState({data: dataSource.filter(item => item.firstName !== firstName)});
    }

    showAdd() {
        this.setState({
            visible: true,
            info: {
                key: {value: ''},
                firstName: {value: ''},
                lastName: {value: ''},
                age: {value: ''},
            }
        });
    }

    showDetail(e) {
        let info = this.state.info;
        for(let x in e){
            info[x].value = e[x];
        }
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        debugger;
        let info = this.state.info;
        let obj = this.state.row;
        for(let x in info){
            obj[x] = info[x].value;
        }
        const dataSource = [...this.state.data];
        dataSource.push(obj);
        this.setState({data: dataSource});

        console.log(this.state);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    handleFormChange = (changedFields) => {
        //debugger;
        this.setState(({info}) => ({
            info: {...info, ...changedFields},
        }));
    }


    render() {
        const fields = this.state.info;

        const columns = this.columns;
        return (
            <MyHeader title="测试列表">
                <link rel="stylesheet" href="../../static/css/common.css"/>
                <div style={myStyle.body}>

                    <div>
                        {/*<Button type="primary" onClick={this.showModal}>Open</Button>*/}
                        <Modal
                            title="信息"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >

                            <CustomizedForm {...fields} onChange={this.handleFormChange}/>

                        </Modal>
                    </div>

                    <Button type="primary" onClick={() => this.showAdd()}>添加</Button>
                    <Table
                    columns={columns}
                    dataSource={this.state.data}
                >
                </Table>
                </div>
            </MyHeader>
        )
    }
}


export default Crud;