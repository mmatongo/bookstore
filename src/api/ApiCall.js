const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiEnd = 'L8vgoTZoDzjU5hFmzaXd';

const endPoint = `${apiURL}${apiEnd}/books/`;

const addBook = async (obj) => {
  const bookData = {
    item_id: obj.id,
    title: obj.title,
    category: obj.category,
  };

  const results = await fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(bookData),
  });

  return results.status;
};

const removeBook = async (id) => {
  const results = await fetch(`${endPoint}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return results.status;
};

export { addBook, removeBook };
