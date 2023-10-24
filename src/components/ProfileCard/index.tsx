import React from 'react';
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
type UserTypePropType = {
  type: string;
};
type UserEmailPropType = {
  email: string;
};
type NamePropTypes = {
  name: string;
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
function Name({ name }: NamePropTypes) {
  return (
    <div className="w-full flex items-center justify-center">
      <label
        htmlFor="title"
        className="text-uppercase font-semibold text-gray-600 w-1/6 text-center"
      >
        Name *
      </label>
      <Input
        // ref={titleRef}
        value={name}
        type="text"
        name="title"
        id="title"
        placeHolder="Enter Title"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
        readOnly
      />
    </div>
  );
}

function UserType({ type }: UserTypePropType) {
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
        value={type}
        type="text"
        name="status"
        id="status"
        placeHolder="Enter Status"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
        readOnly
      />
    </div>
  );
}

function UserEmail({ email }: UserEmailPropType) {
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
        value={email}
        type="text"
        name="email"
        id="email"
        placeHolder="Enter Status"
        className="h-9 border-solid border-2 border-red rounded pl-2 w-1/2"
        required
        readOnly
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
          Edit{' '}
        </button>
      </form>
    </div>
  );
}

function ProfileCard({ personalInfo }: ProfileCardPropTypes) {
  return (
    <div className="main-profile-div font-gilroy">
      <Edit onSubmit={() => {}}>
        <ImgUpload onChange={() => {}} src={personalInfo?.fileSrc || ''} />
        <Name name={personalInfo?.name || ''} />
        <UserEmail email={personalInfo?.email || ''} />
        <UserType type={personalInfo?.userType || ''} />
      </Edit>
    </div>
  );
}

export default ProfileCard;
