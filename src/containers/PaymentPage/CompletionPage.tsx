import { AwardIcon } from '@Icon';
import React from 'react';

export default function CompletionPage() {
  return (
    <section className="w-full h-screen font-gilroy">
      <div className="flex flex-col gap-5 items-center">
        <h5 className="text-center text-3xl mt-8 mb-5 font-bold">
          Congratulations
        </h5>
        <AwardIcon width={350} height={350} />
        <h5 className="text-center text-3xl mt-8 mb-5 font-bold">
          Admin Will Contact You shortly on your email
        </h5>
      </div>
    </section>
  );
}
