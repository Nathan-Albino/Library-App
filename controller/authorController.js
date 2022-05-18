import { Author } from "../models/author.js";

function authorIndex(req, res) {
  res.render("authors/index");
}

function authorNew(req, res) {
  res.render("authors/new", {
    author: new Author(),
  });
}

export { authorIndex, authorNew };
