import { GridStackOptions } from 'gridstack';

export const socialGrid: GridStackOptions = {
  disableOneColumnMode: true,
  class: 'h-full',
  children: [
    {
      w: 3,
      h: 3,
      x: 2,
      y: 2,
      content: `<a href="https://github.com/aaronmyatt/gridstack-gallery" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"></path><title>Get the code</title></svg></a>`,
    },
    {
      w: 3,
      h: 3,
      x: 2,
      y: 6,
      content: `<a href="https://twitter.com/Astrithir" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path><title>Tweet me</title></svg></a>`,
    },
    {
      w: 3,
      h: 3,
      x: 6,
      y: 2,
      content: `<a href="https://www.aaronmyatt.com" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 24H14V26H4zM4 18H14V20H4zM26 14H6a2 2 0 01-2-2V6A2 2 0 016 4H26a2 2 0 012 2v6A2 2 0 0126 14zM6 6v6H26V6zM26 28H20a2 2 0 01-2-2V20a2 2 0 012-2h6a2 2 0 012 2v6A2 2 0 0126 28zm-6-8v6h6V20z"></path><title>Read me</title></svg></a>`,
    },
    {
      w: 3,
      h: 3,
      x: 6,
      y: 6,
      content: `<a href="https://www.linkedin.com/in/aaronmyatt/" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path><title>Connect me</title></svg></a>`,
    },
  ],
};

export const socialGridMobile: GridStackOptions = {
  disableOneColumnMode: true,
  class: 'h-full',
  children: [
    {
      w: 6,
      h: 6,
      content: `<a href="https://github.com/aaronmyatt/gridstack-gallery" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"></path><title>Get the code</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="https://twitter.com/Astrithir" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path><title>Tweet me</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="https://www.aaronmyatt.com" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 24H14V26H4zM4 18H14V20H4zM26 14H6a2 2 0 01-2-2V6A2 2 0 016 4H26a2 2 0 012 2v6A2 2 0 0126 14zM6 6v6H26V6zM26 28H20a2 2 0 01-2-2V20a2 2 0 012-2h6a2 2 0 012 2v6A2 2 0 0126 28zm-6-8v6h6V20z"></path><title>Read me</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="https://www.linkedin.com/in/aaronmyatt/" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path><title>Connect me</title></svg></a>`,
    },
  ],
};
