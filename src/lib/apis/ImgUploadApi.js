// import axios from 'axios';

// export const ImgUploadApi = async (file, parts) => {
//   const formData = new FormData();
//   formData.append('image', file);
//   formData.append('parts', parts);
//   console.log('보낼 데이터', formData);
//   console.log('보낼 데이터', file);
//   console.log('보낼 데이터', parts);
//   try {
//     const response = await axios.post(
//       'http://43.202.47.103:5000/predict',
//       formData,
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
import axios from 'axios';
import { instance } from './instance';

export const ImgUploadApi = async (file, parts) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('parts', parts);
  console.log('보낼 데이터', formData);
  console.log('보낼 데이터', file);
  console.log('보낼 데이터', parts);
  try {
    const response = await instance.post('/predict', formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
