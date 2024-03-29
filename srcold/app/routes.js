import React from 'react';
import { HOME_DATA } from '../shared/dataTypes';
import Home from './layouts/landings/Home';
// import Blog from './layouts/blog/BlogList';
// import Static from './layouts/landings/Static';

export default [
  {
    name: 'home',
    location: {
      path: '/',
      exact: true,
    },
    component: Home,
    loadData: {
      dataType: HOME_DATA,
      fromServer: true,
      fromBrowser: {
        // iDontCareJustLoad: true,
        loadIfNoInitialData: true,
      },
      normalize: data => ({
        message: data.message || data,
      }),
    },
  }
];

// export const test = [
//   {
//     name: 'HOME',
//     path: '/',
//     component: () => <h2>Home</h2>,
//     loadData: {
//       initialFetchIn: 'server',
//       data: ({ users, posts }) => {
//         return users.getUsersList({
//           limit: 10,
//           filter: ({ id, userName, role, ...user }) => {
//             if (
//               userName === 'pepito'
//               || id === 1
//               || role !== 'client'
//               || user.personalInfo.age <= 12
//             ) return false;
//           },
//         });
//       },
//     },
//     data: {
//       from: 'SERVER',
//       type: 'HOME_DATA'
//     },
//     requiresAuth: false,
//   },
//   {
//     name: 'BLOG',
//     path: '/blog',
//     // component: BlogList,
//     data: {
//       from: 'SERVER',
//       type: 'BLOG_LIST_DATA'
//     },
//     requiresAuth: false,
//   },
//   {
//     name: 'BLOGPOST',
//     path: '/blog/:slug',
//     // component: BlogPost,
//     data: {
//       from: 'SERVER',
//       type: (dataTypes, serverReq) => dataFromServer({
//         type: dataTypes.BLOGPOST,
//         params: {
//           slug: serverReq.slug,
//         },
//       }),
//       type: pageInfo => dataType({
//         type: 'BLOGPOST',
//         from: 'SERVER',
//         options: {
//           slug: pageInfo.slug,
//         },
//       }),
//     },
//     requiresAuth: false,
//   },
//   {
//     name: 'STATIC',
//     path: '/static',
//     data: {
//       from: 'BROWSER',
//       type: 'STATIC_DATA'
//     },
//     requiresAuth: false,
//   },
// ];
