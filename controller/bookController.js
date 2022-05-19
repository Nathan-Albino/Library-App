//Book Index Controller
async function bookIndex(req, res) {
  // const searchOptions = {};
  // if (
  //   req.query.name !== null &&
  //   req.query.name !== undefined &&
  //   req.query.name !== ""
  // ) {
  //   searchOptions.name = new RegExp(req.query.name, "i");
  // }
  // try {
  //   const authors = await Author.find(searchOptions);
  //   res.render("authors/index", {
  //     authors: authors,
  //     searchedName: req.query,
  //   });
  // } catch (error) {
  //   console.log("error has occured");
  // }

  res.render("books/index");
}

//New Book Controller
function bookNew(req, res) {
  // res.render("authors/new", {
  //   author: new Author(),
  // });

  res.render("books/new");
}

//Create Book Controller
async function createBook(req, res) {
  // const author = new Author({
  //   name: req.body.name,
  // });
  // try {
  //   await author.save();
  //   res.redirect("/authors");
  // } catch (error) {
  //   res.render("authors/new", {
  //     errorMessage: "Error creating Author",
  //   });
  // }
}

export { bookIndex, bookNew, createBook };
