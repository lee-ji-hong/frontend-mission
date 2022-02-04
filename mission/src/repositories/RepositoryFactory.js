import PostRepository from './ItemRepository';

const repositories = {
  posts: PostRepository,
};
export default {
  get: (name) => repositories[name],
};
