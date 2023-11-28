import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {};
  try {
    const photoRes = await uploadPhoto();
    const userRes = await createUser();

    res.photo = photoRes;
    res.user = userRes;
  } catch (err) {
    console.log(String(err));
    return {
      photo: null,
      user: null,
    };
  }
  return res;
}
