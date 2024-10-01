import React from 'react';

const Card = () => {
  return (
    <div className="w-[252px] h-[265px] bg-white rounded-[30px] transition-transform duration-200 ease-in-out ">
      <div className="w-full h-[50%] rounded-t-[30px] bg-gradient-to-r from-[#e66465] to-[#9198e5] flex items-start justify-end">
        <div className="transition-transform duration-200 ease-in-out rounded-[10px] m-5 w-[30px] h-[30px]  flex items-center justify-center hover:scale-110 hover:rotate-12">
          <svg className="w-[15px] h-[15px]" width="683" height="683" viewBox="0 0 683 683" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_993_25)">
              <mask id="mask0_993_25" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="683" height="683">
                <path d="M0 -0.00012207H682.667V682.667H0V-0.00012207Z" fill="white"></path>
              </mask>
              <g mask="url(#mask0_993_25)">
                <path d="M148.535 19.9999C137.179 19.9999 126.256 24.5092 118.223 32.5532C110.188 40.5866 105.689 51.4799 105.689 62.8439V633.382C105.689 649.556 118.757 662.667 134.931 662.667H135.039C143.715 662.667 151.961 659.218 158.067 653.09C186.451 624.728 270.212 540.966 304.809 506.434C314.449 496.741 327.623 491.289 341.335 491.289C355.045 491.289 368.22 496.741 377.859 506.434C412.563 541.074 496.752 625.242 524.816 653.348C530.813 659.314 538.845 662.667 547.308 662.667C563.697 662.667 576.979 649.395 576.979 633.019V62.8439C576.979 51.4799 572.48 40.5866 564.447 32.5532C556.412 24.5092 545.489 19.9999 534.133 19.9999H148.535Z" stroke="#CED8DE" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_993_25">
                <rect width="682.667" height="682.667" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="m-5 flex flex-col">
        <p className="font-sans text-[15px] font-semibold text-black">Meeting your Colleagues</p>
        <p className="font-sans text-[#999999] text-[13px]">6 Video - 40 min</p>

        <div className="mt-4 w-[70%] p-2 bg-[#e3fff9] rounded-[10px] flex items-center">
          <svg version="1.1" className="w-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
            <g>
              <path className="fill-[#3D6687]" d="M165,68.715l-26.327-26.327l37.363-37.363c3.739-3.739,9.801-3.739,13.54,0l12.786,12.786c3.739,3.739,3.739,9.801,0,13.54L165,68.715z"></path>
              <path className="fill-[#3D6687]" d="M234.998,101.725l-26.327-26.327l37.363-37.363c3.739-3.739,9.801-3.739,13.54,0l12.786,12.786c3.739,3.739,3.739,9.801,0,13.54L234.998,101.725z"></path>
              <path className="fill-[#3D6687]" d="M445.507,349.222l26.327,26.327l37.363-37.363c3.739-3.739,3.739-9.801,0-13.54l-12.787-12.787c-3.739-3.739-9.801-3.739-13.54,0L445.507,349.222z"></path>
              <path className="fill-[#3D6687]" d="M408.054,279.224l26.327,26.327l37.363-37.363c3.739-3.739,3.739-9.801,0-13.54l-12.786-12.786c-3.739-3.739-9.801-3.739-13.54,0L408.054,279.224z"></path>
            </g>
          </svg>
          <p className="ml-2 font-sans text-[13px] font-medium text-[#9198e5]">Business Trip</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
