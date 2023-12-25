import React from "react";

import ArrowUpRightIcon from "@/assets/sprites/up-right-arow.svg";

const OtherProjects = () => {
  return (
    <div className="text-theme-bg-white doc-padding max-w-[1158px] m-auto min-h-screen">
      <h1 className="sm:text-[80px] text-4xl font-medium sm:leading-[104px] text-center mt-8 sm:mt-24 mb-20">
        OTHER PROJECTS
      </h1>
      <div className="flex flex-wrap justify-between">
        <OtherProjectCard
          name="💸 Medusa Payment Paystack"
          tech="Javascript, Medusa.js"
          description="Paystack Payment provider for Medusa Commerce."
          link="https://github.com/a11rew/medusa-payment-paystack"
        />
        <OtherProjectCard
          name="🗓️ Calendar Focus Sync"
          tech="Swift, SwiftUI"
          description="Activate MacOS Focus Modes when calendar events begin"
          link="https://apps.apple.com/gh/app/calendar-focus-sync/id6472858223?mt=12"
        />
        <OtherProjectCard
          name="🕵️ SHA Assist"
          tech="Python"
          description="Easy HTTPS domain certificate fingerprinting"
          link="https://github.com/a11rew/sha-assist"
        />
        <OtherProjectCard
          name="☎️ Phonebook"
          tech="React, TypeScript, Vite, MobX"
          description="A simple Google Contacts inspired contact directory."
          link="https://phonebook-pi.vercel.app/"
        />
        <OtherProjectCard
          name="👋 Wave Portal"
          tech="React, Typescript, Ethereum, Ethers.js"
          description="Send messages to the world via the Ethereum blockchain."
          link="https://wave-portal-client-six.vercel.app/"
        />
      </div>
    </div>
  );
};

export default OtherProjects;

type Props = {
  name: string;
  tech: string;
  description: string;
  link: string;
};

const OtherProjectCard = ({ name, tech, description, link }: Props) => {
  return (
    <div className="bg-[#292929] w-full sm:w-[49%] mb-4 sm:mb-[2vw] p-6 sm:p-11">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-medium text-theme-text-white-muted">{tech}</p>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#3D3D3D] p-4 rounded-full group">
              <p className="sr-only">Visit {name} on GitHub</p>
              <ArrowUpRightIcon className="transition-transform duration-200 ease-in-out group-hover:rotate-45" />
            </button>
          </a>
        </div>
        <hr className="my-8 border-[#3D3D3D]" />
        <div>
          <p className="font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};
