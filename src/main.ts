import './style.css';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

const grid = GridStack.init({ disableOneColumnMode: true });

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
