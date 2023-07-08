import { Button, Input } from '@components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewItemsPage() {
  const navigate = useNavigate();
  return (
    <section className="w-full font-gilroy mt-8 mb-10 flex flex-col">
      <div>
        <Button
          className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
          type="button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-center text-3xl mt-8 mb-5 font-bold">
          Add New Item For Auction
        </h5>
        <form
          action="#"
          className="flex flex-col gap-5 mt-5 lg:ml-80 lg:mr-80 ml-5 mr-5"
        >
          <label htmlFor="title">Title *</label>
          <Input
            type="text"
            name="title"
            id="title"
            className="h-9 border-solid border-2 border-red rounded pl-2"
          />
          <label htmlFor="starting_bid">Starting Bid *</label>
          <Input
            type="number"
            name="starting_bid"
            id="starting_bid"
            className="h-9 border-solid border-2 border-red rounded pl-2"
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
              // onChange={handleImageChange}
            />
          </div>
          <label htmlFor="select_team">Select Team *</label>
          <div className="inline-block relative">
            <select
              className="block appearance-none w-full bg-white border-solid border-2 border-red rounded px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              name="select_team"
            >
              <option>Select Team Type</option>
              <option>Option 2</option>
              <option>Option 3</option>
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
          />

          <Button
            type="submit"
            className="bg-red400 text-white hover:bg-red500 rounded h-10 md:w-80 w-full self-center"
          >
            Add Item
          </Button>
        </form>
      </div>
    </section>
  );
}

export default AddNewItemsPage;
