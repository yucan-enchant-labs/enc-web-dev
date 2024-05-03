import {getHomePageContent } from "@/lib/api";
import './style.css'
import React from "react";
import 'tailwindcss/tailwind.css';
import { EncButton } from "./components/buttons";

export default async function Home() {
  const homeData = await getHomePageContent();

  const navData = homeData.navigation;
  const navButton = homeData.navigation.buttonsCollection.items[0];
  const homeBG = homeData.backgroundImage?.url;
  const banner = homeData.heroBackground?.url;
  const locations = homeData.locationCardCollection.items;
  const experiences = homeData.experienceCardsCollection.items;
  const footerSection = homeData.footerSection;
  return (
    <div style={{ backgroundImage: `url(${homeBG})` }}>
      <header className="flex justify-between items-center w-full p-20 pt-6 pb-6 ">
        <div className="flex gap-10 items-center">
          <img src={navData.logo.url} alt="enchant" className="w-[40px] h-[40px]" />
          <menu>Location Selection</menu>
          <a href="">Collaborate</a>
          <a href="">Blog</a>
        </div>
        <div className="flex gap-10 items-center">
          <a href="">Help</a>
          <EncButton
            label={navButton.label}
            externalUrl={navButton.externalUrl}
            style={navButton.style}
            openIn={navButton.openIn}
          />
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center p-20 pt-0">

        {/* Banner */}
        <div className="relative w-screen h-[418px]">
          <div className="absolute top-0 w-screen left-0 h-[418px]">
            <img src={banner} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Slug */}
        <div className="container mx-auto py-8 px-36">
          <p className="text-white text-center font-proxima-nova text-xl font-normal leading-36px tracking-wide">{homeData.slug} </p>
          {/* Slug content */}
        </div>

        {/* City Info Cards */}
        <div className="container mx-auto py-8 flex flex-col gap-10 items-center px-36">
          {/* City Info Cards content */}

          <div className="flex justify-center flex-col items-center">

            <p className="encTitle goldenBGColor">Lighting up these cities</p>
            <span>select one of our...</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {locations.map((location: any, index: number) => (
              <React.Fragment key={index}>
                {location.venueName && index < 9 && (
                  <div className="locationCard">
                    <div className="flex gap-4">
                      <img className="h-[50px]" src={location.icon.url} alt="location" />
                      <div>
                        <p className="encTitle text-2xl bg-none text-white">{location.location}</p>
                        <p className="text-base">{location.venueName}</p>
                      </div>
                    </div>
                    <button className="secondaryButton">Get Tickets</button>
                  </div>
                )}
                {index === 9 && (
                  <div className="flex justify-center" key={index}>
                    <div className="locationCard">
                      <div className="flex gap-4">
                        <img className="h-[50px]" src={location.icon.url} alt="location" />
                        <div>
                          <p className="encTitle text-2xl bg-clip-none text-white">{location.location}</p>
                          <p className="text-base">{location.venueName}</p>
                        </div>
                      </div>
                      <button className="secondaryButton">Get Tickets</button>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Experience Section */}
        <div className="container mx-auto flex flex-col gap-10 items-center my-40">
          <div className="flex justify-center flex-col items-center">

            <p className="encTitle goldenBGColor text-[40px]">Experience</p>
            <span>Select one of our 6 locations and start exploring what is available in your city. </span>
          </div>
          {/* Experience Section content */}
          <div className="relative w-screen h-[525px] flex flex-row justify-between">
            <div className="flex gap-x-10 absolute top-0 w-screen left-0 h-[525px]">
              {experiences.map((experience: any, index: number) => (
                experience.title &&
                <div className={`flex flex-col gap-6 h-full ${index % 2 === 0 ? 'pt-[40px]' : 'pb-[40px]'}`} key={index}>
                  <img src={experience.bgImage.url} alt="experience" />
                  <div>
                    <p className="font-semibold">{experience.title}</p>
                    <span>{experience.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Social Section */}
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-4">Social Section</h2>
          {/* Social Section content */}
        </div>

        {/* Sponsors Section */}
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-4">Sponsors Section</h2>
          {/* Sponsors Section content */}
        </div>

        {/* Reviews Section */}
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-4">Reviews Section</h2>
          {/* Reviews Section content */}
        </div>


        {/* <h1 className="text-5xl my-12">{hero.title}</h1> */}
        {/* <a href={hero.url}>The url goes here...</a> */}
      </main>
      {/* Footer */}
      <footer className="text-white pt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          {/* <div className="flex flex-col md:flex-row items-center"> */}
          <div className="flex flex-col items-center gap-[40px]">
            {/* Enchant Logo */}
            <img src={footerSection.logo.url} alt="enchant" />
            <div className="flex flex-col items-center gap-[30px]">

              {/* Sub heading */}
              <p>Sub Heading Goes Here</p>
              <div className="flex gap-3">
                <input className="primaryInput" type="text" placeholder="Select Location" />
                <input className="primaryInput" type="text" placeholder="Enter Email" />
                <button className="secondaryButton border border-white">Subscribe Now</button>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-[24px] font-bold">Get Tickets</p>
                <ul>
                  <li><a href="#">Group Opportunities</a></li>
                  <li><a href="#">Private Events</a></li>
                  <li><a href="#">Suite Packages</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[24px] font-bold">Get Tickets</p>
                <ul>
                  <li><a href="#">Group Opportunities</a></li>
                  <li><a href="#">Private Events</a></li>
                  <li><a href="#">Suite Packages</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[24px] font-bold">Get Tickets</p>
                <ul>
                  <li><a href="#">Group Opportunities</a></li>
                  <li><a href="#">Private Events</a></li>
                  <li><a href="#">Suite Packages</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[24px] font-bold">Get Tickets</p>
                <ul>
                  <li><a href="#">Group Opportunities</a></li>
                  <li><a href="#">Private Events</a></li>
                  <li><a href="#">Suite Packages</a></li>
                </ul>
              </div>
            </div>
            <div className="flex w-full flex-col gap-6">

              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-full flex justify-between">
                <p>{footerSection.firmInfo}</p>
                <div className=" flex gap-8">
                  <a href={footerSection.terms}>Terms & Conditions</a>
                  <a href={footerSection.policy}>Privacy Policy</a>
                  <div className="w-[132px] flex justify-between">
                    <img src="" alt="ins" />
                    <img src="" alt="fb" />
                    <img src="" alt="tiktok" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            {/* Inputs: Select Location, Email */}
            {/* Subscribe Now Button */}
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            {/* Get Tickets */}
            {/* About Us */}
            {/* Group & Private */}
            {/* Customer Service */}
          </div>
        </div>
      </footer>
    </div>

  );
}