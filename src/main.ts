import './style.css';
import 'gridstack/dist/gridstack.min.css';
import { GridStack, GridStackOptions } from 'gridstack';
import GridStackGallery from 'gridstack-gallery';

const grid = GridStack.init({ disableOneColumnMode: true });

const socialGrid: GridStackOptions = {
  disableOneColumnMode: true,
  children: [
    {
      w: 6,
      h: 6,
      content: `<a href="" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"></path><title>Logo GitHub</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path><title>Logo Twitter</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.67,4H5.33A1.34,1.34,0,0,0,4,5.33V26.67A1.34,1.34,0,0,0,5.33,28H16.82V18.72H13.7V15.09h3.12V12.42c0-3.1,1.89-4.79,4.67-4.79.93,0,1.86,0,2.79.14V11H22.37c-1.51,0-1.8.72-1.8,1.77v2.31h3.6l-.47,3.63H20.57V28h6.1A1.34,1.34,0,0,0,28,26.67V5.33A1.34,1.34,0,0,0,26.67,4Z"></path><title>Logo Facebook</title></svg></a>`,
    },
    {
      w: 6,
      h: 6,
      content: `<a href="" class="hover:opacity-90 hover:drop-shadow-lg" ><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path><title>Logo LinkedIn</title></svg></a>`,
    },
  ],
};

const waitForSelector = setInterval(function () {
  if (document.querySelectorAll('.app .gsg').length) {
    GridStackGallery();
    clearInterval(waitForSelector);
  }
}, 100);

grid.batchUpdate();

grid.addWidget({
  w: 6,
  h: 6,
  content: document.querySelector('#title')!.innerHTML,
});
grid.addWidget({
  w: 6,
  h: 6,
  content: document.querySelector('#example')!.innerHTML,
});
grid.addWidget({
  w: 6,
  h: 6,
  content: document.querySelector('#about')!.innerHTML,
});
grid.addWidget({
  w: 6,
  h: 6,
  subGrid: socialGrid,
});

grid.commit();
