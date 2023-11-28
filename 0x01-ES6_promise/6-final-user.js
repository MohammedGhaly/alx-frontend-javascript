import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]).then((data) => data.map((el) => ({
    status: el.status,
    value: el.status === 'fulfilled' ? el.value : String(el.reason),
  })));
}
