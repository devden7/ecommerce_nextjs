import React from "react";

const DealslSection = () => {
  return (
    <section className="mt-20">
      <div className="container font-coresans">
        <div className="flex justify-between gap-5">
          <div className="w-3/6 rounded-xl bg-[url('/assets/img/deals-image.jpg')] bg-cover px-10 pb-14 pt-16">
            <h6 className="h6-bold mb-6 tracking-[0.2px] text-light-900">
              Low price
            </h6>
            <h2 className="h2-bold mb-2 text-light-900">High Coziness</h2>
            <h3 className="mb-10 text-base font-medium tracking-[0.2px] text-light-900">
              BEST DEALS
            </h3>
            <h6 className="h6-bold text-xl text-light-900 underline">
              Explore Items
            </h6>
          </div>

          <div className="w-3/6 rounded-xl bg-[url('/assets/img/deals-image-2.jpg')] bg-cover px-10 pb-14 pt-16">
            <h6 className="h6-bold mb-6 tracking-[0.2px] text-light-900">
              Beyoung Presents
            </h6>
            <h2 className="h2-bold mb-2 text-light-900">
              Breezy Summer <br></br> Style
            </h2>
            <h3 className="mb-10 text-base font-medium tracking-[0.2px] text-light-900">
              BEST DEALS
            </h3>
            <h6 className="h6-bold text-xl text-light-900 underline">
              Explore Items
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealslSection;
