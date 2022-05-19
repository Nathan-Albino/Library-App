import { Author } from "../models/author.js";

//Author Index Controller
async function authorIndex(req, res) {
  const searchOptions = {};

  if (
    req.query.name !== null &&
    req.query.name !== undefined &&
    req.query.name !== ""
  ) {
    searchOptions.name = new RegExp(req.query.name, "i");
  }

  try {
    const authors = await Author.find(searchOptions);

    res.render("authors/index", {
      authors: authors,
      searchedName: req.query,
    });
  } catch (error) {
    console.log("error has occured");
  }
}

//New Author Controller
function authorNew(req, res) {
  res.render("authors/new", {
    author: new Author(),
  });
}

//Create Author Controller
async function createAuthor(req, res) {
  const author = new Author({
    name: req.body.name,
  });

  try {
    await author.save();
    res.redirect("/authors");
  } catch (error) {
    res.render("authors/new", {
      errorMessage: "Error creating Author",
    });
  }
}

export { authorIndex, authorNew, createAuthor };
