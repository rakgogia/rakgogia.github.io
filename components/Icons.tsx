
import React from 'react';

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 .7a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.95 10.95 0 0112 6.13c.98 0 1.95.13 2.87.38 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0012 .7z" />
  </svg>
);

export const MicrosoftLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
    <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
  </svg>
);

export const OutlookLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="14" y="8" width="29" height="32" rx="4" fill="#0A64AD" />
    <path d="M16 14h25v21H16z" fill="#28A8EA" />
    <path d="m16 15 12.5 10L41 15v20H16z" fill="#50D9FF" />
    <rect x="4" y="11" width="25" height="27" rx="3" fill="#1473E6" />
    <path d="M16.5 17c5 0 8 3.7 8 8s-3 8-8 8-8-3.7-8-8 3-8 8-8Zm0 4c-2.1 0-3.3 1.6-3.3 4s1.2 4 3.3 4 3.3-1.6 3.3-4-1.2-4-3.3-4Z" fill="white" />
  </svg>
);

export const TeamsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="36" cy="11" r="5" fill="#7B83EB" />
    <circle cx="24" cy="10" r="6.5" fill="#5059C9" />
    <path d="M28 17h13a4 4 0 0 1 4 4v9c0 6-4 10-10 10-2.6 0-4.9-.8-7-2.4z" fill="#7B83EB" />
    <path d="M14 16h18a4 4 0 0 1 4 4v11c0 7-5 12-12.5 12S11 38 11 31V19a3 3 0 0 1 3-3Z" fill="#5059C9" />
    <rect x="3" y="13" width="24" height="25" rx="3" fill="#6264A7" />
    <path d="M8 19h15v4h-5v11h-5V23H8z" fill="white" />
  </svg>
);

export const SharePointLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="33" cy="12" r="7" fill="#37C6D0" />
    <circle cx="36" cy="27" r="9" fill="#038387" />
    <circle cx="27" cy="37" r="8" fill="#036C70" />
    <circle cx="20" cy="23" r="15" fill="#1A9BA1" />
    <rect x="3" y="11" width="25" height="27" rx="3" fill="#038387" />
    <path d="M20.5 20.4a12 12 0 0 0-5.4-1.5c-1.7 0-2.5.5-2.5 1.4 0 .8.8 1.3 3.3 2.2 3.7 1.2 5.2 2.8 5.2 5.5 0 3.4-2.8 5.4-7.2 5.4-2.6 0-4.8-.5-6.4-1.4v-4.4a11.7 11.7 0 0 0 6.3 2c1.7 0 2.6-.5 2.6-1.4 0-.9-.7-1.3-3.2-2.2-3.7-1.2-5.3-2.9-5.3-5.5 0-3.3 2.8-5.4 7.2-5.4 2.1 0 3.9.4 5.4 1.1z" fill="white" />
  </svg>
);

export const CopilotLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="copilot-blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.005 20.5144) rotate(-129.304) scale(17.3033 16.2706)">
        <stop offset=".0956" stopColor="#00AEFF" />
        <stop offset=".7732" stopColor="#2253CE" />
        <stop offset="1" stopColor="#0736C4" />
      </radialGradient>
      <radialGradient id="copilot-red" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.1215 32.8171) rotate(51.84) scale(15.9912 15.5119)">
        <stop stopColor="#FFB657" />
        <stop offset=".6337" stopColor="#FF5F3D" />
        <stop offset=".9234" stopColor="#C02B3C" />
      </radialGradient>
      <linearGradient id="copilot-left" x1="12.5" y1="7.5" x2="14.7884" y2="33.9751" gradientUnits="userSpaceOnUse">
        <stop offset=".1562" stopColor="#0D91E1" />
        <stop offset=".4875" stopColor="#52B471" />
        <stop offset=".6524" stopColor="#98BD42" />
        <stop offset=".9374" stopColor="#FFC800" />
      </linearGradient>
      <linearGradient id="copilot-left-shine" x1="14.5" y1="4" x2="15.7496" y2="32.8852" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3DCBFF" />
        <stop offset=".2467" stopColor="#0588F7" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="copilot-right" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.3187 12.2813) rotate(109.274) scale(38.3873 45.9867)">
        <stop offset=".0662" stopColor="#8C48FF" />
        <stop offset=".5" stopColor="#F2598A" />
        <stop offset=".8958" stopColor="#FFB152" />
      </radialGradient>
      <linearGradient id="copilot-right-shine" x1="42.5859" y1="13.346" x2="42.5695" y2="21.2147" gradientUnits="userSpaceOnUse">
        <stop offset=".0582" stopColor="#F8ADFA" />
        <stop offset=".7081" stopColor="#A86EDD" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M34.1423 7.32501C33.5634 5.35387 31.7547 4 29.7003 4H28.3488C26.1142 4 24.1985 5.59611 23.7952 7.79398L21.4805 20.4072 22.0549 18.4419C22.6319 16.4679 24.4419 15.1111 26.4986 15.1111H34.3524L37.6462 16.3942 40.8213 15.1111H39.8946C37.8401 15.1111 36.0315 13.7572 35.4525 11.7861L34.1423 7.32501Z" fill="url(#copilot-blue)" />
    <path d="M14.3307 40.656C14.9032 42.6366 16.7165 44 18.7783 44H21.6486C24.1592 44 26.2122 41.999 26.2767 39.4893L26.5893 27.3271 25.9354 29.5602C25.3577 31.5332 23.5481 32.8889 21.4923 32.8889H13.5732L10.7499 31.3573 7.69336 32.8889H8.60461C10.6663 32.8889 12.4796 34.2522 13.0521 36.2329L14.3307 40.656Z" fill="url(#copilot-red)" />
    <path d="M29.4993 4H13.46C8.87732 4 6.12772 10.0566 4.29466 16.1132 2.12296 23.2886-.718769 32.8852 7.50252 32.8852H14.4282C16.4978 32.8852 18.3147 31.5168 18.8835 29.5269 20.0876 25.3143 22.1978 17.9655 23.8554 12.3712 24.6977 9.52831 25.3993 7.08673 26.4762 5.56628 27.0799 4.71385 28.086 4 29.4993 4Z" fill="url(#copilot-left)" />
    <path d="M29.4993 4H13.46C8.87732 4 6.12772 10.0566 4.29466 16.1132 2.12296 23.2886-.718769 32.8852 7.50252 32.8852H14.4282C16.4978 32.8852 18.3147 31.5168 18.8835 29.5269 20.0876 25.3143 22.1978 17.9655 23.8554 12.3712 24.6977 9.52831 25.3993 7.08673 26.4762 5.56628 27.0799 4.71385 28.086 4 29.4993 4Z" fill="url(#copilot-left-shine)" />
    <path d="M18.498 44H34.5374C39.12 44 41.8696 37.9424 43.7027 31.8848 45.8744 24.7081 48.7161 15.1098 40.4948 15.1098H33.5693C31.4996 15.1098 29.6827 16.4784 29.114 18.4684 27.9098 22.6817 25.7996 30.032 24.142 35.6273 23.2996 38.4708 22.598 40.9127 21.5212 42.4335 20.9175 43.286 19.9113 44 18.498 44Z" fill="url(#copilot-right)" />
    <path d="M18.498 44H34.5374C39.12 44 41.8696 37.9424 43.7027 31.8848 45.8744 24.7081 48.7161 15.1098 40.4948 15.1098H33.5693C31.4996 15.1098 29.6827 16.4784 29.114 18.4684 27.9098 22.6817 25.7996 30.032 24.142 35.6273 23.2996 38.4708 22.598 40.9127 21.5212 42.4335 20.9175 43.286 19.9113 44 18.498 44Z" fill="url(#copilot-right-shine)" />
  </svg>
);

export const CopilotSearchLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="copilot-search-mark" x1="5" y1="6" x2="42" y2="43" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F060A8" />
        <stop offset=".38" stopColor="#7067E8" />
        <stop offset=".7" stopColor="#0AA7C2" />
        <stop offset="1" stopColor="#F6B73C" />
      </linearGradient>
    </defs>
    <path d="M16 6c4.1 0 6.5 2.5 8.4 5.7l4.4 7.7c1.1 1.8 2.2 2.5 3.8 2.5 2 0 3.3-1.4 3.3-3.5S34.6 15 32.7 15c-1.1 0-2.1.5-3 1.5L26 10.3a11.4 11.4 0 0 1 6.7-2.2c6.1 0 10.2 4.3 10.2 10.3 0 2.7-.8 5-2.3 6.8a13.3 13.3 0 0 0-17.1 2.4 10 10 0 0 1-7.5.6c-5.8 0-9.7-4-9.7-10.4S10.2 6 16 6Z" fill="url(#copilot-search-mark)" />
    <circle cx="31.5" cy="32.5" r="8.5" fill="white" stroke="url(#copilot-search-mark)" strokeWidth="4" />
    <path d="m38 39 6 6" stroke="#2388FF" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const UMichLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/umich_logo.png"
    alt="UMich Logo"
    {...props}
  />
);

export const ProQuestLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/proquest_logo.png"
    alt="ProQuest Logo"
    {...props}
  />
);

export const BoALogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/bofa.png"
    alt="BofA Logo"
    {...props}
  />
);

export const ShopeeLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/shopee_logo.png"
    alt="Shopee Logo"
    {...props}
  />
);

export const InfosysLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/infosys_logo.png"
    alt="Infosys Logo"
    {...props}
  />
);

export const SingaporeArmyLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/singapore_army_logo.webp"
    alt="Singapore Army crest"
    {...props}
  />
);