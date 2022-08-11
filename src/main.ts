import './style.css';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import GridStackGallery from 'gridstack-gallery';

const grid = GridStack.init({ disableOneColumnMode: true });

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
  content: document.querySelector('#contact')!.innerHTML,
});

grid.commit();
