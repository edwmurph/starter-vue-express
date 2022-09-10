import axios from 'axios';

const $fetch = async( path, opts ) => {
  const { data } = await axios.get( `http://localhost:3000${ path }`, opts );
  return data;
};

export default {
  install: ( app ) => {
    app.config.globalProperties.$fetch = $fetch;
  }
};
