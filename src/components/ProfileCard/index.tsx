import React, { useState } from 'react';
import './profileCard.css';
import { Input } from '@components';
import { ProfileCardPropTypes } from './types';

type ImageUploadPropType = {
  onChange: () => void;
  src: string;
};
type EditProfilePropType = {
  onSubmit: () => void;
  children: React.ReactNode;
};

function ImgUpload({ onChange, src }: ImageUploadPropType) {
  return (
    <label
      htmlFor="item_image"
      className="custom-file-upload fas profile-label"
    >
      <div className="img-wrap img-upload">
        <img alt="profile-pic" className="form-img" src={src} />
      </div>
      <input
        name="item_image"
        id="item_image"
        type="file"
        onChange={onChange}
        className="form-input"
      />
    </label>
  );
}
function Name() {
  return (
    <div className="w-full flex items-center justify-center">
      <label
        htmlFor="title"
        className="text-uppercase font-semibold text-gray-600 w-1/6 text-center"
      >
        Title *
      </label>
      <Input
        // ref={titleRef}
        type="text"
        name="title"
        id="title"
        placeHolder="Enter Title"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
      />
    </div>
  );
}

function Status() {
  return (
    <div className="w-full flex items-center justify-center">
      <label
        htmlFor="status"
        className="text-uppercase font-semibold text-gray-600 w-1/6 text-center"
      >
        Status *
      </label>
      <Input
        // ref={statusRef}
        type="text"
        name="status"
        id="status"
        placeHolder="Enter Status"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
      />
    </div>
  );
}

function UserEmail() {
  return (
    <div className="w-full flex items-center justify-center">
      <label
        htmlFor="email"
        className="text-uppercase font-semibold text-gray-600 w-1/6 text-center"
      >
        Email *
      </label>
      <Input
        // ref={emailRef}
        type="text"
        name="email"
        id="email"
        placeHolder="Enter Status"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
      />
    </div>
  );
}

function Edit({ onSubmit, children }: EditProfilePropType) {
  return (
    <div className="card">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-5 items-center justify-center"
      >
        {children}
        <button type="submit" className="save form-button">
          Save{' '}
        </button>
      </form>
    </div>
  );
}

function ProfileCard({ personalInfo }: ProfileCardPropTypes) {
  const [name, setName] = useState('kilogram');
  const [status, setStatus] = useState('');
  const [active, setActive] = useState('edit');
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
  );

  return (
    <div className="main-profile-div font-gilroy">
      <Edit onSubmit={() => {}}>
        <ImgUpload onChange={() => {}} src={imagePreviewUrl} />
        <Name />
        <UserEmail />
        <Status />
      </Edit>
    </div>
  );
}

export default ProfileCard;
