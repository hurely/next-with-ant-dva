const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const model = {
  namespace: 'index',
  state: {
    name: 'kung',
    count: 0,
    init: false,
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

