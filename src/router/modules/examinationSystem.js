/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const examinationSystemRouter = {
  path: '/examinationSystemTable',
  component: Layout,
  redirect: '/examinationSystemTable/testTable',
  name: 'examinationSystemTable',
  meta: {
    title: 'examinationSystemTable',
    icon: 'table'
  },
  children: [
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'inlineEditTable' }
    },
    {
      path: 'testTable',
      component: () => import('@/views/examinationSystemTable/testTable'),
      name: 'testTable',
      meta: { title: 'testTable' }
    }
  ]
}
export default examinationSystemRouter
