function authorIndex(req, res) {
  res.render("authors/index");
}

function authorNew(req, res) {
  res.render("authors/new");
}

export { authorIndex, authorNew };
