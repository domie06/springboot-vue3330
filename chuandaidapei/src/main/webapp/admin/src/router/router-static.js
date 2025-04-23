import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import chuanda from '@/views/modules/chuanda/list'
    import chuandaCollection from '@/views/modules/chuandaCollection/list'
    import chuandaCommentback from '@/views/modules/chuandaCommentback/list'
    import chuandaOrder from '@/views/modules/chuandaOrder/list'
    import chuandajiangtang from '@/views/modules/chuandajiangtang/list'
    import chuandajiangtangCollection from '@/views/modules/chuandajiangtangCollection/list'
    import chuandajiangtangLiuyan from '@/views/modules/chuandajiangtangLiuyan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChanghe from '@/views/modules/dictionaryChanghe/list'
    import dictionaryChuanda from '@/views/modules/dictionaryChuanda/list'
    import dictionaryChuandaCollection from '@/views/modules/dictionaryChuandaCollection/list'
    import dictionaryChuandaOrder from '@/views/modules/dictionaryChuandaOrder/list'
    import dictionaryChuandaOrderPayment from '@/views/modules/dictionaryChuandaOrderPayment/list'
    import dictionaryChuandajiangtang from '@/views/modules/dictionaryChuandajiangtang/list'
    import dictionaryChuandajiangtangCollection from '@/views/modules/dictionaryChuandajiangtangCollection/list'
    import dictionaryFengge from '@/views/modules/dictionaryFengge/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShencai from '@/views/modules/dictionaryShencai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChanghe',
        name: '场合',
        component: dictionaryChanghe
    }
    ,{
        path: '/dictionaryChuanda',
        name: '穿搭类型',
        component: dictionaryChuanda
    }
    ,{
        path: '/dictionaryChuandaCollection',
        name: '收藏表类型',
        component: dictionaryChuandaCollection
    }
    ,{
        path: '/dictionaryChuandaOrder',
        name: '订单类型',
        component: dictionaryChuandaOrder
    }
    ,{
        path: '/dictionaryChuandaOrderPayment',
        name: '订单支付类型',
        component: dictionaryChuandaOrderPayment
    }
    ,{
        path: '/dictionaryChuandajiangtang',
        name: '穿搭讲堂类型',
        component: dictionaryChuandajiangtang
    }
    ,{
        path: '/dictionaryChuandajiangtangCollection',
        name: '收藏表类型',
        component: dictionaryChuandajiangtangCollection
    }
    ,{
        path: '/dictionaryFengge',
        name: '风格',
        component: dictionaryFengge
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShencai',
        name: '身材',
        component: dictionaryShencai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chuanda',
        name: '穿搭',
        component: chuanda
      }
    ,{
        path: '/chuandaCollection',
        name: '穿搭收藏',
        component: chuandaCollection
      }
    ,{
        path: '/chuandaCommentback',
        name: '穿搭评价',
        component: chuandaCommentback
      }
    ,{
        path: '/chuandaOrder',
        name: '穿搭订单',
        component: chuandaOrder
      }
    ,{
        path: '/chuandajiangtang',
        name: '穿搭讲堂',
        component: chuandajiangtang
      }
    ,{
        path: '/chuandajiangtangCollection',
        name: '穿搭讲堂收藏',
        component: chuandajiangtangCollection
      }
    ,{
        path: '/chuandajiangtangLiuyan',
        name: '穿搭讲堂留言',
        component: chuandajiangtangLiuyan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
