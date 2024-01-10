import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fbdf77374b09415885538f3f077916f0',
  },
});
