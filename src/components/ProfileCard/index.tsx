import React, { useState } from 'react';
import './profileCard.css';
import { Input } from '@components';
import { ProfileCardPropTypes } from './types';

function ImgUpload({ onChange, src }) {
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

function Status({ onChange, value }) {
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

function Profile({ onSubmit, src, name, status }) {
  return (
    <div className="card">
      <form onSubmit={onSubmit} className="profile-form">
        <label className="profile-label custom-file-upload fas">
          <div className="img-wrap">
            <img
              htmlFor="photo-upload"
              alt="something"
              className="form-img"
              src={src}
            />
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit form-button">
          Edit Profile{' '}
        </button>
      </form>
    </div>
  );
}

function Edit({ onSubmit, children }) {
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
        <Status onChange={() => {}} value={status} />
      </Edit>
    </div>
  );
}

export default ProfileCard;
