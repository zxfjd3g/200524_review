const User = () => import('@/views/acl/user/list')
const UserAdd = () => import('@/views/acl/user/UserAdd')
const Role = () => import('@/views/acl/role/list')
const RoleAuth = () => import('@/views/acl/role/roleAuth')
const Permission = () => import('@/views/acl/permission/list')
const Attr = () => import('@/views/product/attr/list')
const Trademark = () => import('@/views/product/trademark/list')
const Spu = () => import('@/views/product/spu/list')
const Sku = () => import('@/views/product/sku/list')
const Order = () => import('@/views/order/list')
const ClientUser = () => import('@/views/user/index')
const Category = () => import('@/views/category/list')
const Scoped = () => import('@/views/test/scoped')
const TestList = () => import('@/views/test/list')


export default {
  User: {
    component: User,
    path: 'user/list'
  },
  UserAdd: {
    component: UserAdd,
    path: 'user/add'
  },
  UserAdd2: {
    component: UserAdd,
    path: 'user/add2'
  },
  UserAdd3: {
    component: UserAdd,
    path: 'user/add3'
  },
  Role: {
    path: 'role/list',
    component: Role,
  },
  RoleAuth: {
    path: 'role/auth/:id',
    component: RoleAuth,
  },
  Permission: {
    path: 'permission/list',
    component: Permission,
  },
  Attr: {
    path: 'attr/list',
    component: Attr,
  },
  Trademark: {
    path: 'trademark/list',
    component: Trademark,
  },
  Spu: {
    path: 'spu/list',
    component: Spu,
  },
  Sku: {
    path: 'sku/list',
    component: Sku,
  },
  Order: {
    path: 'order/list',
    component: Order,
  },
  ClientUser: {
    path: 'list',
    component: ClientUser,
  },
  Category: {
    path: 'list',
    component: Category,
  },

  Scoped: {
    path: 'scoped',
    component: Scoped
  },
  TestList: {
    path: 'list',
    component: TestList
  },
}


/* 
{
  path: '/test',
  component: Layout,
  children: [
    {
      path: 'scoped'
      component: Scoped
    }
  ]
}
*/