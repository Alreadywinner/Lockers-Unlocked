import React from 'react';
import { Button, Input, ScrollToTop } from '@components';
import { EnvelopeIcon, LocationIcon, PhoneIcon } from 'assets/icons/icons';

function ContactPage() {
  return (
    <section className="w-full font-gilroy">
      <ScrollToTop />
      <div className="flex flex-col gap-5">
        <h5 className="text-center text-3xl mt-8 mb-5 font-bold">
          Get in Touch
        </h5>
        <form
          action="#"
          className="flex flex-col gap-5 mt-5 lg:ml-80 lg:mr-80 ml-5 mr-5"
        >
          <label htmlFor="name">Your name *</label>
          <Input
            type="text"
            name="name"
            id="name"
            className="h-9 border-solid border-2 border-red rounded pl-2"
          />
          <label htmlFor="email">Email *</label>
          <Input
            type="text"
            name="email"
            id="email"
            className="h-9 border-solid border-2 border-red rounded pl-2"
          />

          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={8}
            className="border-solid border-2 border-red rounded pl-2"
          />

          <Button
            type="submit"
            className="bg-red400 text-white hover:bg-red500 rounded h-10 mt-2 md:w-80 w-full self-center"
          >
            Send
          </Button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 mb-10 leading-relaxed text-gray500">
        <h5 className="text-2xl font-bold mt-10 mb-6 text-black">
          Contact Information
        </h5>
        <div className="flex items-center justify-between text-center gap-10 flex-col md:flex-row md:gap-20">
          <div className="flex md:flex-row flex-col items-center gap-10 text-base leading-relaxed text-black">
            <LocationIcon width={100} height={100} />
            <span>San Francisco, CA , US</span>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-10 text-base leading-relaxed text-black">
            <EnvelopeIcon width={100} height={100} />

            <span className="cursor-pointer hover:underline hover:underline-offset-8">
              <a href="mailto:lockersunlocked@support.com">
                lockersunlocked@support.com
              </a>
            </span>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-10 text-base leading-relaxed text-black">
            <PhoneIcon width={100} height={100} />
            <span>(+92) - 303 005 854</span>
          </div>
        </div>
        <div className="flex flex-col mt-14 mb-5 items-center justify-center gap-4 md:gap-12 md:flex-row md:justify-between">
          <h5 className=" text-black text-2xl md:text-xl font-bold">
            Working Hours
          </h5>
          <p className="text-black">
            Monday - Saturday: <span className="ml-3">8 AM - 6 PM</span>
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27972.48941898911!2d-122.45165589542735!3d37.77251754741872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1685122768882!5m2!1sen!2s"
        title="Map View"
        width="100%"
        height="600"
        allowFullScreen={false}
        loading="lazy"
      />
    </section>
  );
}

export default ContactPage;
