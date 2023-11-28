import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
    .then((data) => {
      console.log(data);
      this.f = data.firstName;
      this.l = data.lastName;
    })
    .catch(new Error('Signup system offline'));
  uploadPhoto()
    .then((data) => {
      this.body = data.body;
    })
    .catch(new Error('Signup system offline'));
  console.log(`${this.body} ${this.f} ${this.l}`);
  uploadPhoto();
}
