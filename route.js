import about from "./pages/about.js";
import portFolio from "./pages/portfolio.js";
import Home from "./pages/home.js";
function router(path, push = true) {
  if (path === "/main.html") {
    path = "/home";
  }

  const routes = {
    "/home": Home,
    "/about": about,
    "/portFolio": portFolio,
  };

  const rootDiv = document.querySelector(".main");
  rootDiv.innerHTML = routes[path]();

  if (push) {
    window.location.hash = path;
  }
  //   window.location.pathname = path;
}

window.addEventListener("hashchange", () => {
  router(window.location.hash.slice(1), false);
});

router(window.location.hash.slice(1) || "/home", false);

window.router = router;
