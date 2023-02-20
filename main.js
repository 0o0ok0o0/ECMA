// thư viện
import "bootstrap/dist/css/bootstrap.min.css"
import { router, render } from './libs';
// Menu user
import HomePage from './pages/home'
import ContactPage from './pages/contact';
import About from './pages/about';
import ProjectPage from './pages/project';


//Menu Admin
import categorys from './pages/admin/categorys';
import categorys_add from './pages/admin/categorys_add';
import categorys_edit from './pages/admin/categorys_edit';






import notfoundPage from './pages/not-found';
import projectDetail from './pages/project-detail';

document.querySelector('#app').innerHTML = HomePage();
// tạo các đường dẫn đến các page

router.on('/', () => {
  render(app, HomePage);
})
router.on('/contact', () => {
  render(app, ContactPage);
})
router.on('/about', () => {
  render(app, About);
})
router.on('/project', () => {
  render(app, ProjectPage);
})

router.on("/project/:id", (params) => {
  render(app, function () {
    return projectDetail(params)

  })
})
// Admin
router.on("/admin/categorys", () => render(app, categorys))
router.on('/admin/category_add', () => render(app, categorys_add))
router.on("admin/categorys_edit/:id", (params) => {
  render(app, function () {
    return categorys_edit(params)

  })
})
router.notFound(() => {
  render(app, notfoundPage);
})

router.resolve();