import { getSingleBook } from './bookData';
import { getSingleAuthor, getAuthorBooks } from './authorData';
// for merged promises
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authObj) => {
    getAuthorBooks(firebaseKey)
      .then((booksObj) => resolve({ ...authObj, booksObj }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
