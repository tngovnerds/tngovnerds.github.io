// Constants
var DEFAULT_ROUTE = 'home';

// Setup events and handlers
window.onload = load;
window.onhashchange = routeChanged;

function load() {
  routeChanged();
}

function routeChanged() {
  var i, articles, article, selectedRoute;

  articles = getPageArticles();
  selectedRoute = getSelectedRoute();

  for (i=0; i<articles.length; i++) {
    article = articles[i];
    article.style.display = isArticleSelected(article, selectedRoute) ? "block" : "none";
  }
}

// helpers
function getPageArticles() {
  return document.getElementsByTagName("article")
}
function getSelectedRoute() {
  var hash = window.location.hash;
  return hash && hash.match(/^\#!/) ? hash.replace("#!", "") : DEFAULT_ROUTE;
}
function isArticleSelected(article, selectedRoute) {
  return article.id == selectedRoute;
}
