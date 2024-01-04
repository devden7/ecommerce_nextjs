import React from "react";

const NewArrival = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex items-center gap-2">
          <div className="h-8 w-2 rounded-full bg-primary-500"></div>
          <h3 className="h3-bold h3-tittle">New Arrival</h3>
        </div>
        <div className="mt-14 flex justify-between">
          <div>
            <div className="h-[263px] w-[263px] rounded-xl bg-[url('/assets/img/newArrival-1.jpg')] bg-cover"></div>
            <p className="mt-6 font-causten text-xl  font-bold text-light-400">
              Knitted Joggers
            </p>
          </div>
          <div>
            <div className="h-[263px] w-[263px] rounded-xl bg-[url('/assets/img/newArrival-2.jpg')] bg-cover"></div>
            <p className="mt-6 font-causten text-xl font-bold  text-light-400">
              Full Sleeve
            </p>
          </div>
          <div>
            <div className="h-[263px] w-[263px] rounded-xl bg-[url('/assets/img/newArrival-3.jpg')] bg-cover"></div>
            <p className="mt-6 font-causten text-xl font-bold  text-light-400">
              Active T-Shirts
            </p>
          </div>
          <div>
            <div className="h-[263px] w-[263px] rounded-xl bg-[url('/assets/img/newArrival-4.jpg')] bg-cover"></div>
            <p className="mt-6 font-causten text-xl font-bold  text-light-400">
              Urban Shirts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
