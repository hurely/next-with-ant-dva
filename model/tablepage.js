const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const model = {
  namespace: 'table',
  state: {
    name: 'kung',
    count: 0,
    init: false,
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
      key: { value: '' },
      firstName: { value: '' },
      lastName: { value: '' },
      age: { value: '' },
      address: { value: '' }
    },
    row: {
      key: '',
      firstName: '',
      lastName: '',
      age: '',
      address: ''
    }
  },
  reducers: {
    caculate(state, payload) {
      const { count } = state;
      const { delta } = payload;
      return { ...state, count: count + delta };
    },
  },
  effects: {
    async init(action, { put }) {
      await delay(2000);
      await put({ type: 'caculate', delta: 1 });
    },
  },
};

export default model;

