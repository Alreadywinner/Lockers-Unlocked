import { Button, Input, Loader, Toast } from '@components';
import React, { useRef, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamTypeData from 'utils/teamTypeData';
import { db, storage } from 'firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { FirebaseErrorType } from '@components/LoginForm/types';
import { addDoc, collection } from 'firebase/firestore';
import { useLocalStorageDataContext } from '@context';
import { AddNewItemType } from './types';

function AddNewItemsPage() {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const startingBidRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const teamSelectRef = useRef<HTMLSelectElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const { localStorageData, fetchAllItems } = useLocalStorageDataContext();
  const [fileData, setFileData] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });
  const addNewFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = event.target.files;
    setFileData(temp);
  };
  const validateData = (data: AddNewItemType): boolean => {
    if (
      data.description === '' ||
      data.startingBid === '' ||
      data.teamSelect === '' ||
      data.title === '' ||
      data.fileData === null ||
      data.endDate === ''
    ) {
      setShowToast({
        visible: true,
        text: 'Please enter all fields',
      });
      return false;
    }
    if (Number(data.startingBid) < 0) {
      setShowToast({
        visible: true,
        text: 'Starting Bid should be at least 1$',
      });
      return false;
    }
    const currentDate = new Date();
    const selectedEndDate = new Date(`${data.endDate}T00:00:00Z`);

    if (selectedEndDate < currentDate) {
      setShowToast({
        visible: true,
        text: 'End date should be greater than Todays Date',
      });
      return false;
    }

    const twoWeeksForward = new Date();
    twoWeeksForward.setDate(currentDate.getDate() + 14);

    if (selectedEndDate > twoWeeksForward) {
      setShowToast({
        text: 'End date should be within two weeks from now',
        visible: true,
      });
      return false;
    }
    return true;
  };
  const handleUploadItem = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      title: titleRef.current?.value || '',
      startingBid: startingBidRef.current?.value || '',
      description: descriptionRef.current?.value || '',
      teamSelect: teamSelectRef.current?.value || '',
      fileData: fileData || null,
      fileSrc: '',
      user_id: localStorageData?.id || '',
      endDate: endDateRef.current?.value || '',
    };
    try {
      if (validateData(data)) {
        if (data.fileData !== null) {
          const fileBlob = new Blob([data.fileData.item(0) as File]);
          const storageRef = ref(
            storage,
            `files/${data.fileData.item(0)?.name}`,
          );
          const snapshot = await uploadBytes(storageRef, fileBlob);
          const downloadURL = await getDownloadURL(snapshot.ref);
          const { fileData: dataFileData, ...dataWithoutFileData } = data;
          dataWithoutFileData.fileSrc = downloadURL;

          await addDoc(collection(db, 'items'), {
            ...dataWithoutFileData,
            status: 'live',
            currentBid: startingBidRef.current?.value,
            bids: [
              {
                id: localStorageData?.id,
                bid: data.startingBid,
              },
            ],
          });
          fetchAllItems();
          setShowToast({
            visible: true,
            text: 'Item Added Successfully',
          });
          if (titleRef.current) {
            titleRef.current.value = '';
          }
          if (startingBidRef.current) {
            startingBidRef.current.value = '';
          }
          if (descriptionRef.current) {
            descriptionRef.current.value = '';
          }
          if (teamSelectRef.current) {
            teamSelectRef.current.value = '';
          }
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
          if (endDateRef.current) {
            endDateRef.current.value = '';
          }
          setFileData(null);
        }
      }
    } catch (err) {
      const Error = err as FirebaseErrorType;
      setShowToast({
        visible: true,
        text: `${Error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full font-gilroy mt-8 mb-10 flex flex-col">
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <div>
        <Button
          className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
          type="button"
          onClick={() => navigate(-1)}
          disabled={loading}
        >
          Go Back
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-center text-3xl mt-8 mb-5 font-bold">
          Add New Item For Auction
        </h5>
        <form
          className="flex flex-col gap-5 mt-5 lg:ml-80 lg:mr-80 ml-5 mr-5"
          onSubmit={handleUploadItem}
        >
          <label htmlFor="title">Title *</label>
          <Input
            ref={titleRef}
            type="text"
            name="title"
            id="title"
            placeHolder="Enter Title"
            className="h-9 border-solid border-2 border-red rounded pl-2"
            required
          />
          <label htmlFor="starting_bid">Starting Bid *</label>
          <Input
            ref={startingBidRef}
            type="number"
            name="starting_bid"
            id="starting_bid"
            placeHolder="Enter Number"
            className="h-9 border-solid border-2 border-red rounded pl-2"
            required
          />
          <label htmlFor="item_image">Item Image *</label>
          <div className="block">
            <span className="sr-only">Choose Image for an Item</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              "
              accept="image/*"
              name="item_image"
              id="item_image"
              onChange={addNewFiles}
              ref={fileInputRef}
              required
            />
          </div>
          <label htmlFor="select_team">Select Team *</label>
          <div className="inline-block relative">
            <select
              className="block appearance-none w-full bg-white border-solid border-2 border-red rounded px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              name="select_team"
              ref={teamSelectRef}
            >
              <option value="">Select Team Type</option>
              {TeamTypeData.map((element) => (
                <option key={element.id}>{element.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <label htmlFor="description">Description *</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={8}
            className="border-solid border-2 border-red rounded pl-2"
            placeholder="Enter details about Item"
            ref={descriptionRef}
            required
          />

          <label htmlFor="end_date">End Date *</label>
          <Input
            ref={endDateRef}
            type="date"
            name="end_date"
            id="end_date"
            className="h-9 border-solid border-2 border-red rounded pl-2"
            required
          />

          <Button
            type="submit"
            className="bg-red400 text-white hover:bg-red500 rounded h-10 md:w-80 w-full self-center"
            disabled={loading}
          >
            {loading ? <Loader /> : 'Add Item'}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default AddNewItemsPage;
