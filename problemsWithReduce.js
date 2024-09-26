//! Problem: Given an array of items in a shopping cart, each with a price and quantity, calculate the total cost.

const cart = [
  { item: 'Laptop', price: 800, quantity: 1 },
  { item: 'Phone', price: 500, quantity: 2 },
  { item: 'Headphones', price: 100, quantity: 3 },
];

const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

// console.log(totalPrice);

//! Problem: Given an array of blog posts with tags, count how often each tag appears.

const blogPosts = [
  { title: 'Post 1', tags: ['JavaScript', 'Web'] },
  { title: 'Post 2', tags: ['CSS', 'Web', 'Design'] },
  { title: 'Post 3', tags: ['JavaScript', 'CSS'] },
];

const tagCount = blogPosts.reduce((acc, post) => {
  post.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, {});

// console.log(tagCount);

//* find the books how many times read
const readers = [
  {
    name: 'Arman',
    books: ['7 Habits', 'You Can Win', 'Harry Potter'],
  },
  {
    name: 'Abu Naim',
    books: ['Road to Mocca', 'You Can Win', 'Road to White House'],
  },
  {
    name: 'Mahabub',
    books: ['How to Control wife', 'Road to White House', 'You Can Win'],
  },
];

const bookCount = readers.reduce((acc, reader) => {
  reader.books.forEach(book => {
    acc[book] = (acc[book] || 0) + 1;
  });
  return acc;
}, {});

// console.log(bookCount);

//! Problem: Given an array of user posts, each containing the number of likes, return the total number of likes across all posts.

const posts = [
  { id: 1, title: 'Post 1', likes: 150 },
  { id: 2, title: 'Post 2', likes: 100 },
  { id: 3, title: 'Post 3', likes: 50 },
];

const totalLikes = posts.reduce((total, post) => {
  return total + post.likes;
}, 0);

// console.log(totalLikes);

//! Problem: You have a nested array structure for comments and replies, and you need to flatten it into a single array of comments.

const comments = [
  {
    id: 1,
    text: 'Comment 1',
    replies: [
      { id: 2, text: 'Reply 1' },
      { id: 3, text: 'Reply 2' },
    ],
  },
  {
    id: 4,
    text: 'Comment 2',
    replies: [{ id: 5, text: 'Reply 3' }],
  },
];

const flattenComments = comments.reduce((acc, comment) => {
  return acc.concat(comment, comment.replies);
}, []);

// console.log(flattenComments);

//! Problem: You have a list of users with their roles and want to group them by their roles.

const users = [
  { name: 'Rave', role: 'Customer' },
  { name: 'Alice', role: 'Admin' },
  { name: 'Bob', role: 'User' },
  { name: 'Charlie', role: 'Admin' },
  { name: 'Dave', role: 'User' },
  { name: 'naim', role: 'Customer' },
];

const groupedByRole = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }

  acc[user.role].push(user);
  return acc;
}, {});

// console.log(groupedByRole);
