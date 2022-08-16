import './style.css';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack-gallery/dist/style.css';
import { GridStack } from 'gridstack';
import GridStackGallery from 'gridstack-gallery';
import { socialGrid, socialGridMobile } from './socialGrid';

const grid = GridStack.init({
  disableOneColumnMode: false,
  oneColumnSize: 640,
});

const waitForSelector = setInterval(function () {
  if (document.querySelectorAll('.app .gsg').length) {
    GridStackGallery();
    clearInterval(waitForSelector);
  }
}, 100);

grid.batchUpdate();

if (window.innerWidth <= 640) {
  grid.margin(0);
  grid.addWidget({
    w: 1,
    h: 1,
    content: document.querySelector('#title')!.innerHTML,
  });
  grid.addWidget({
    w: 1,
    h: 1,
    content: document.querySelector('#example')!.innerHTML,
  });
  grid.addWidget({
    w: 1,
    h: 1,
    content: document.querySelector('#about')!.innerHTML,
  });
  grid.addWidget({
    w: 1,
    h: 1,
    subGrid: socialGridMobile,
  });
} else {
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
}

grid.commit();
