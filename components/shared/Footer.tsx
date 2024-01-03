import { socialMediiaListsIcons } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[600px] bg-light-400 font-causten">
      <div className="mx-auto max-w-[1150px] pt-14">
        <div className="mb-7 flex justify-between gap-7">
          <div className="text-light-850">
            <h3 className="h3-bold mb-5 text-light-850">Need Help</h3>
            <p className="mb-3 text-lg">Contact Us</p>
            <p className="mb-3 text-lg">Track Order</p>
            <p className="mb-3 text-lg">Returns & Refunds</p>
            <p className="mb-3 text-lg">FAQ&apos;s</p>
            <p className="mb-20 text-lg">Career</p>
            <div className="flex items-end gap-3">
              {socialMediiaListsIcons.map((list) => (
                <a href={list.route} key={list.label} target="_blank">
                  <Image
                    src={list.iconImage}
                    alt={list.label}
                    width={37}
                    height={37}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-light-850">
            <h3 className="h3-bold mb-5 text-light-850">Company</h3>
            <p className="mb-3 text-lg">About Us</p>
            <p className="mb-3 text-lg">Euphoria Blog</p>
            <p className="mb-3 text-lg">Euphoriastan</p>
            <p className="mb-3 text-lg">Collaboration</p>
            <p className="text-lg">Media</p>
          </div>
          <div className="text-light-850">
            <h3 className="h3-bold mb-5 text-light-850">More Info</h3>
            <p className="mb-3 text-lg">Term and Conditions</p>
            <p className="mb-3 text-lg">Privacy Policy</p>
            <p className="mb-3 text-lg">Shopping Policy</p>
            <p className="text-lg">Sitemap</p>
          </div>
          <div className="text-light-850">
            <h3 className="h3-bold mb-5 text-light-850">Location</h3>
            <p className="mb-3 text-lg">support@support.com</p>
            <p className="mb-3 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <p className="mb-24 text-lg">
              Lorem ipsum dolor sit amet, America - 123456
            </p>
            <div>
              <h3 className="h3-bold mb-5 text-light-850">Download The App</h3>
              <div className="flex items-end gap-10">
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/group-1.svg"
                    alt="google play"
                    width={29}
                    height={29}
                  />

                  <div className="text-light-900">
                    <span className="mb-3 text-xs">android app on</span>
                    <p className="text-lg">Google Play</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/group.svg"
                    alt="app store"
                    width={29}
                    height={29}
                  />

                  <div className="text-light-900">
                    <span className="mb-3 text-xs">available on the</span>
                    <p className="text-lg">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full border-b-[1px] border-light-700 opacity-40"></div>
        <div className="flex-between mb-2">
          <h3 className="h3-bold mb-5 text-light-850">Popular Categories</h3>

          <Image
            src="/assets/icons/chevron/down.svg"
            alt="chevron down"
            width={20}
            height={20}
          />
        </div>
        <div className="mb-5 w-full border-b-[1px] border-light-700 opacity-40"></div>
        <p className="text-center text-light-900">
          Copright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
