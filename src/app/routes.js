// import Home from './layouts/landings/Home';
// import Blog from './layouts/blog/BlogList';
// import Static from './layouts/landings/Static';

export default [
  {
    name: 'HOME',
    path: '/',
    // component: Home,
    loadData: {
      initialFetchIn: 'server',
      data: ({ users, posts }) => {
        return users.getUsersList({
          limit: 10,
          filter: ({ id, userName, role, ...user }) => {
            if (
              userName === 'pepito'
              || id === 1
              || role !== 'client'
              || user.personalInfo.age <= 12
            ) return false;
          },
        });
      },
    },
    data: {
      from: 'SERVER',
      type: 'HOME_DATA'
    },
    requiresAuth: false,
  },
  {
    name: 'BLOG',
    path: '/blog',
    // component: BlogList,
    data: {
      from: 'SERVER',
      type: 'BLOG_LIST_DATA'
    },
    requiresAuth: false,
  },
  {
    name: 'BLOGPOST',
    path: '/blog/:slug',
    // component: BlogPost,
    data: {
      from: 'SERVER',
      type: (dataTypes, serverReq) => dataFromServer({
        type: dataTypes.BLOGPOST,
        params: {
          slug: serverReq.slug,
        },
      }),
      type: pageInfo => dataType({
        type: 'BLOGPOST',
        from: 'SERVER',
        options: {
          slug: pageInfo.slug,
        },
      }),
    },
    requiresAuth: false,
  },
  {
    name: 'STATIC',
    path: '/static',
    data: {
      from: 'BROWSER',
      type: 'STATIC_DATA'
    },
    requiresAuth: false,
  },
];
