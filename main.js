// thư viện
import "bootstrap/dist/css/bootstrap.min.css"
import { router, render } from './libs';
import './stylecss.css';
// Menu user
import HomePage from './pages/home'
import ContactPage from './pages/contact';
import About from './pages/about';
import ProjectPage from './pages/project';
import projectDetail from "./pages/project-detail";

//Menu Admin
import categorys from './pages/admin/categorys';
import categorys_add from './pages/admin/categorys_add';
import categorys_edit from './pages/admin/categorys_edit';
import projects from './pages/admin/projects';
import projects_add from './pages/admin/projects_add';
import projects_edit from './pages/admin/projects_edit';







import notfoundPage from './pages/not-found';



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

router.on("/projects/:id", (params) => {
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
router.on("admin/projects_edit/:id", (params) => {
  render(app, function () {
    return projects_edit(params)

  })
})
router.on("/admin/projects", () => render(app, projects))
router.on('/admin/projects_add', () => render(app, projects_add))
router.on("admin/projects_detail/:id", (params) => {
  render(app, function () {
    return projects_edit(params)

  })
})
router.notFound(() => {
  render(app, notfoundPage);
})

router.resolve();