// // import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import { setupCounter } from './counter.js'

// // document.querySelector('#app').innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="/vite.svg" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello Vite!</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// // `

// // setupCounter(document.querySelector('#counter'))
// import HomePage from "./pages/home";
// import Contact from "./pages/contact";
// import main from "./pages/trangchu";
// import Navigo from "navigo";

// const app = document.querySelector('#app');
// const render = (container, content)=>{
// container.innerHTML = content();
// }
// const router = new Navigo();
// // app.innerHTML = HomePage();

// router.on('/',()=>{
// render(app, HomePage);
// })
// router.on('/contact',()=>{
// render(app, Contact);
// })
// document.querySelector('button').onclick = ()=>{

//         render(app,main)

// }
// document.querySelector('#returns').onclick = ()=>{

//         render(app,HomePage)

// }

// router.resolve()

import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
import HomePage from './pages/home'
import ContactPage from './pages/contact';
import test from './pages/test';

document.querySelector('#app').innerHTML = HomePage();

import { router } from './libs';

import ProjectPage from './pages/project';
import './pages/trangchu.css';
import main_trang from './pages/trangchu';
import notfoundPage from './pages/not-found';
import projectDetail from './pages/project-detail';
const render = (container, content) => {
  container.innerHTML = content();
}



// tạo các đường dẫn đến các page
router.on('/', () => {
  render(app, HomePage);
})
router.on('/contact', () => {
  render(app, ContactPage);
})
router.on('/test', () => {
  render(app, test);
})
router.on('/project', () => {
  render(app, ProjectPage);
})
router.on('/trangchu', () => {
  render(app, main_trang);
})
router.on("/project/:id", (params) => {
  render(app,function(){
  return projectDetail(params)
  
  } )
})
router.notFound(() => {
  render(app, notfoundPage);
})

router.resolve();