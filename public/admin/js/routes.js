angular.element(document).ready(function() {
    var templatePath = '/assets/admin/views/';
    var app = angular.module('webapp');
    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {

            var routeMap = {
                '/index': {
                    view : 'index',
                    action : 'AdminController@Index',
                },
                '/member/types': {
                    view : 'member-types',
                    action : 'MemberController@MemberTypes',
                },
                '/mt/shop/goods': {
                    view : 'mt-shop-goods',
                    action : 'MemberController@MTShopGoods',
                },
                '/mt/:mt/shop/goods': {
                    view : 'mt-shop-goods',
                    action : 'MemberController@MTShopGoods',
                },
                '/package/types': {
                    view : 'package-types',
                    action : 'MemberController@PackageTypes',
                },
                '/packages': {
                    view : 'packages',
                    action : 'MemberController@Packages',
                },
                '/package/products': {
                    view : 'products',
                    action : 'MemberController@Products',
                },
                '/members': {
                    view : 'members',
                    action : 'MemberController@Members',
                },
                '/members/:userid': {
                    view : 'members',
                    action : 'MemberController@Members',
                },
                '/member/migrations': {
                    view : 'member-migrations',
                    action : 'MemberController@MemberMigrations',
                },
                '/member/recharge/orders': {
                    view : 'member-recharge-orders',
                    action : 'MemberController@MemberRechargeOrders',
                },
                '/prepaid/cards': {
                    view : 'prepaid-cards',
                    action : 'MemberController@PrepaidCards',
                },
                '/prepaid/card/migrations': {
                    view : 'prepaid-card-migrations',
                    action : 'MemberController@PrepaidCardMigrations',
                },
                '/member/recharge/queues': {
                    view : 'member-recharge-queues',
                    action : 'MemberController@MemberRechargeQueues',
                },
                '/member/import': {
                    view : 'member-import',
                    action : 'MemberController@MemberImport',
                },
                '/agents': {
                    view : 'agents',
                    action : 'AgentController@Agents',
                },
                '/user/package': {
                    view : 'user-package',
                    action : 'AgentController@Package',
                },
                '/user/:userid/package': {
                    view : 'user-package',
                    action : 'AgentController@Package',
                },
                '/user/rank': {
                    view : 'user-rank',
                    action : 'AgentController@Rank',
                },
                '/user/rank/pp': {
                    view : 'user-rank-pp',
                    action : 'AgentController@RankPP',
                },
                '/user/rank/:rankNumber/pp': {
                    view : 'user-rank-pp',
                    action : 'AgentController@RankPP',
                },
                '/account/balance': {
                    view : 'account-balance',
                    action : 'AgentController@AccountBalance',
                },
                '/account/journal': {
                    view : 'account-journal',
                    action : 'AgentController@AccountJournal',
                },
                '/shop/orders/:type': {
                    view : 'shop-orders',
                    action : 'ShopController@Orders',
                },
                '/user/admin': {
                    view : 'user-admin',
                    action : 'UserController@UserAdmin',
                },
                '/user/role': {
                    view : 'user-role',
                    action : 'UserController@UserRole',
                },
                '/alipay/order': {
                    view : 'alipay-order',
                    action : 'UserController@AlipayOrder',
                },
                '/providers': {
                    view : 'providers',
                    action : 'ProviderController@Providers',
                },
                '/provider/packages': {
                    view : 'provider-packages',
                    action : 'ProviderController@ProviderPackages',
                },
                '/provider/members': {
                    view : 'provider-members',
                    action : 'ProviderController@ProviderMembers',
                },
                '/provider/orders': {
                    view : 'provider-orders',
                    action : 'ProviderController@ProviderOrders',
                },
                '/wx/orders': {
                    view : 'wx-orders',
                    action : 'WxController@Orders',
                },
                '/shop/coupon/groups': {
                    view : 'shop-coupon-groups',
                    action : 'ShopController@ShopCouponGroups',
                },
                '/shop/coupons': {
                    view : 'shop-coupons',
                    action : 'ShopController@ShopCoupons',
                },
                '/announcements': {
                    view : 'announcements',
                    action : 'AdminController@Announcements',
                },
                '/user/commissions': {
                    view : 'user-commissions',
                    action : 'AgentController@UserCommissions',
                },
                '/user/commission/audit': {
                    view : 'user-commission-audit',
                    action : 'AgentController@UserCommissionAudit',
                },
                '/user/balance/exchange': {
                    view : 'user-balance-exchange',
                    action : 'AgentController@UserBalanceExchange',
                },
                '/youzan/orders': {
                    view : 'youzan-orders',
                    action : 'YouZanController@Orders',
                },
                '/wd/orders': {
                    view : 'wd-orders',
                    action : 'WdController@Orders',
                },
                '/app/orders': {
                    view : 'app-orders',
                    action : 'AppController@Orders',
                },
                '/data/member/daily/stats': {
                    view : 'data-member-daily-stats',
                    action : 'DataController@MemberDailyStats',
                },
                '/data/member/monthly/stats': {
                    view : 'data-member-monthly-stats',
                    action : 'DataController@MemberMonthlyStats',
                },
                '/data/provider/member/monthly/stats': {
                    view : 'data-provider-member-monthly-stats',
                    action : 'DataController@ProviderMemberMonthlyStats',
                },
                '/data/user/daily/stats': {
                    view : 'data-user-daily-stats',
                    action : 'DataController@UserDailyStats',
                },
                '/data/user/monthly/stats': {
                    view : 'data-user-monthly-stats',
                    action : 'DataController@UserMonthlyStats',
                },
                '/user/daily/data/stats': {
                    view : 'user-daily-data-stats',
                    action : 'DataController@UserDailyDataStats',
                },
                '/user/data/stats': {
                    view : 'user-data-stats',
                    action : 'DataController@UserDataStats',
                },
                '/data/member/usage/daily/stats': {
                    view : 'data-member-usage-daily-stats',
                    action : 'DataController@MemberUsageDailyStats',
                },
                '/data/member/usage/monthly/stats': {
                    view : 'data-member-usage-monthly-stats',
                    action : 'DataController@MemberUsageMonthlyStats',
                },
                '/user/operate/rules': {
                    view : 'user-operate-rules',
                    action : 'AgentController@UserOperateRules',
                },
                '/work/tickets': {
                    view : 'work-tickets',
                    action : 'WorkController@WorkTickets',
                },
                '/work/ticket/types': {
                    view : 'work-ticket-types',
                    action : 'WorkController@WorkTicketTypes',
                },
                '/pp/schedules': {
                    view : 'pp-schedules',
                    action : 'MemberController@PPSchedules',
                },
                '/member/rules': {
                    view : 'member-rules',
                    action : 'MemberController@MemberRules',
                },
                '/rebate/rules': {
                    view : 'rebate-rules',
                    action : 'AgentController@RebateRules',
                },
                '/tags': {
                    view : 'tags',
                    action : 'TagController@Tags',
                },
                '/sms': {
                    view : 'sms',
                    action : 'SMSController@SMS',
                },
                '/sms/multiple': {
                    view : 'sms-multiple',
                    action : 'SMSController@SMSMultiple',
                },
                '/user/log': {
                    view : 'user-log',
                    action : 'UserController@UserLog',
                },
                '/industry/information/type': {
                    view : 'industry-information-type',
                    action : 'WebController@IndustryInformationType',
                },
                '/industry/information': {
                    view : 'industry-information',
                    action : 'WebController@IndustryInformation',
                },
                '/share/pools': {
                    view : 'share-pools',
                    action : 'PoolController@SharePool',
                },
                '/share/pool/members': {
                    view : 'share-pool-members',
                    action : 'PoolController@SharePoolMembers',
                },
                '/pool/member/migrations': {
                    view : 'pool-member-migrations',
                    action : 'PoolController@PoolMemberMigration',
                },
                //权限管理
                '/permission/manage': {
                    view : 'permission-manage',
                    action : 'UserController@PermissionManage',
                },
            };
            routeMap = permissionRoute(admin, routeMap);
            var defaultRoute = '/index';

            var controllerPath = '/assets/admin/js/controllers/';

            for (var key in routeMap) {
                var regexp = /^([a-zA-Z]+)@([a-zA-Z]+)$/;
                var match = routeMap[key].action.match(regexp); if (match) {
                    var controller = match[1];
                    var func = match[2];
                    var cpath = controllerPath;
                    $routeProvider.when(key, {
                        templateUrl: templatePath + routeMap[key].view + '.html?v=' + resourceVersion,
                        controller: controller + '_' + func,
                        resolve:{
                            keyName: requireModule(controller, func)
                        }
                    });
                }
            }
            $routeProvider.otherwise({redirectTo: defaultRoute});

            function requireModule(controller, func) {
                return function ($route, $q) {
                    var deferred = $q.defer();
                    if (controllerList[controller] != undefined) {
                        $controllerProvider.register(controller + '_' + func, controllerList[controller][func]);
                        deferred.resolve();
                    }
                    return deferred.promise;
                }
            }
            /**
             * 根据用户权限生成路由
             */
            function permissionRoute(admin, routeMap) {
                var maps = {};
                for (var key in routeMap ) {
                    for (var j in admin.roles ) {
                        var judge = 0;
                        for (var k in admin.roles[j].perms ) {
                            if(admin.roles[j].perms[k].name == routeMap[key].view) {
                                maps[key] = routeMap[key];
                                judge = 1;
                                break;
                            }
                        }
                        if (judge == 1) {break;}
                    }
                }
                return maps;
            }
        }
    ]);
    app.run(['$rootScope', '$location', function($rootScope, $location){
        $rootScope.pageData = {title: '', brief: '', pathlist: []};
        $rootScope.getTemplatePath = function(path){
            if (path != undefined) {
                return templatePath + path;
            }
            return templatePath;
        }
        $rootScope.navClick = function(event){
            $('.js-nav-li').removeClass('active');
            $(event.currentTarget).addClass('active');
        }
        /**
         * 根据用户权限显示页面
         */
        var permissionToShow = function(admin, parentNav) {
            var navs = [];
            var childNavs = [];
            for (var i in parentNav ) {
                var row = parentNav[i];
                if (row.childrens != undefined && row.childrens.length > 0) {
                    // 搜索儿子
                    childNavs = permissionToShow(admin, row.childrens);
                    if (childNavs.length > 0) {
                        var r = angular.copy(row);
                        r.childrens = childNavs;
                        navs.push(r);
                        continue;
                    }
                } else {
                    for (var j in admin.roles ) {
                        var judge = 0;
                        for (var k in admin.roles[j].perms ) {
                            if(admin.roles[j].perms[k].display_name == row.name) {
                                navs.push(row);
                                judge = 1;
                                break;
                            }
                        }
                        if (judge == 1) {break;}
                    }
                }
            }
            return navs;
        }
        // 配置导航
        $rootScope.navigation = [
            {
                name: '首页',
                url: '#/index',
                logo: 'fa-dashboard',
            },
            {
                name: '供应商管理',
                logo: 'fa-black-tie',
                childrens: [
                    {
                        name: '供应商列表',
                        url: '#/providers',
                    },
                    {
                        name: '供应商套餐',
                        url: '#/provider/packages',
                    },
                    {
                        name: '供应商物联卡',
                        url: '#/provider/members',
                    },
                    {
                        name: '供应商操作记录',
                        url: '#/provider/orders',
                    },
                ],
            },
            {
                name: '商品管理',
                logo: 'fa-shopping-cart',
                childrens: [
                    {
                        name: '物联卡类型',
                        url: '#/member/types',
                    },
                    {
                        name: '客户购卡商品',
                        url: '#/mt/shop/goods',
                    },
                    {
                        name: '套餐父类',
                        url: '#/package/types',
                    },
                    {
                        name: '套餐子类',
                        url: '#/packages',
                    },
                    {
                        name: '客户充值套餐',
                        url: '#/package/products',
                    },
                    {
                        name: '电信套餐日程信息',
                        url: '#/pp/schedules',
                    },
                ],
            },
            {
                name: '物联卡管理',
                logo: 'fa-credit-card',
                childrens: [
                    {
                        name: '物联卡列表',
                        url: '#/members',
                    },
                    {
                        name: '购买卡订单',
                        url: '#/shop/orders/member',
                    },
                    {
                        name: '物联卡转移记录',
                        url: '#/member/migrations',
                    },
                    {
                        name: '流量充值记录',
                        url: '#/member/recharge/orders',
                    },
                    {
                        name: '流量批量充值记录',
                        url: '#/member/recharge/queues',
                    },
                    {
                        name: '物联卡导入',
                        url: '#/member/import',
                    },
                    {
                        name: '物联卡规则',
                        url: '#/member/rules',
                    },
                ],
            },
            {
                name: '共享池管理',
                logo: 'fa-sitemap',
                childrens: [
                    {
                        name: '共享池列表',
                        url: '#/share/pools',
                    },
                    {
                        name: '共享池成员管理',
                        url: '#/share/pool/members',
                    },
                    {
                        name: '共享池物联卡转移记录',
                        url: '#/pool/member/migrations',
                    },
                ],
            },
            {
                name: '充值卡密管理',
                logo: 'fa-ticket',
                childrens: [
                    {
                        name: '充值卡密列表',
                        url: '#/prepaid/cards',
                    },
                    {
                        name: '购买卡密订单',
                        url: '#/shop/orders/prepaid',
                    },
                    {
                        name: '充值卡密转移记录',
                        url: '#/prepaid/card/migrations',
                    },
                ],
            },
            {
                name: '优惠券管理',
                logo: 'fa-money',
                childrens: [
                    {
                        name: '优惠券类型',
                        url: '#/shop/coupon/groups',
                    },
                    {
                        name: '优惠券列表',
                        url: '#/shop/coupons',
                    },
                ],
            },
            {
                name: '标签管理',
                logo: 'fa-tags',
                childrens: [
                    {
                        name: '标签列表',
                        url: '#/tags',
                    },
                ],
            },
            {
                name: '用户管理',
                logo: 'fa-users',
                childrens: [
                    {
                        name: '用户列表',
                        url: '#/agents',
                    },
                    {
                        name: '用户套餐设置',
                        url: '#/user/package',
                    },
                    {
                        name: '会员等级',
                        url: '#/user/rank',
                    },
                    {
                        name: '会员套餐模板',
                        url: '#/user/rank/pp',
                    },
                    {
                        name: '用户加款扣款',
                        url: '#/account/balance',
                    },
                    {
                        name: '用户资金流水',
                        url: '#/account/journal',
                    },
                    {
                        name: '代理提成明细',
                        url: '#/user/commissions',
                    },
                    {
                        name: '代理提成审核',
                        url: '#/user/commission/audit',
                    },
                    {
                        name: '余额提现审核',
                        url: '#/user/balance/exchange',
                    },
                    {
                        name: '用户操作控制',
                        url: '#/user/operate/rules',
                    },
                    {
                        name: '返利规则设置',
                        url: '#/rebate/rules',
                    },
                ],
            },
            {
                name: '店铺管理',
                logo: 'fa-university',
                childrens: [
                    {
                        name: '微信订单',
                        url: '#/wx/orders',
                    },
                    {
                        name: '有赞订单',
                        url: '#/youzan/orders',
                    },
                    {
                        name: '微店订单',
                        url: '#/wd/orders',
                    },
                    {
                        name: 'APP订单',
                        url: '#/app/orders',
                    },
                ],
            },
            {
                name: '数据统计',
                logo: 'fa-bar-chart',
                childrens: [
                    {
                        name: '物联卡日均统计',
                        url: '#/data/member/daily/stats',
                    },
                    {
                        name: '物联卡月均统计',
                        url: '#/data/member/monthly/stats',
                    },
                    {
                        name: '供应商物联卡月均统计',
                        url: '#/data/provider/member/monthly/stats',
                    },
                    {
                        name: '物联卡日均用量',
                        url: '#/data/member/usage/daily/stats',
                    },
                    {
                        name: '物联卡月均用量',
                        url: '#/data/member/usage/monthly/stats',
                    },
                    {
                        name: '用户资金日均统计',
                        url: '#/data/user/daily/stats',
                    },
                    {
                        name: '用户资金月均统计',
                        url: '#/data/user/monthly/stats',
                    },
                    {
                        name: '用户日均基础数据',
                        url: '#/user/daily/data/stats',
                    },
                    {
                        name: '用户月均基础数据',
                        url: '#/user/data/stats',
                    },
                ],
            },
            {
                name: '客服工单管理',
                logo: 'fa-wrench',
                childrens: [
                    {
                        name: '工单列表',
                        url: '#/work/tickets',
                    },
                    {
                        name: '工单类型',
                        url: '#/work/ticket/types',
                    },
                ],
            },
            {
                name: '短信功能',
                logo: 'fa-envelope',
                childrens: [
                    {
                        name: '短信单发记录',
                        url: '#/sms',
                    },
                    {
                        name: '短信群发记录',
                        url: '#/sms/multiple',
                    },
                ],
            },
            {
                name: '官网管理',
                logo: 'fa-television',
                childrens: [
                    {
                        name: '行业资讯类型管理',
                        url: '#/industry/information/type',
                    },
                    {
                        name: '行业资讯管理',
                        url: '#/industry/information',
                    },
                ],
            },
            {
                name: '通知管理',
                logo: 'fa-bell',
                childrens: [
                    {
                        name: '公告列表',
                        url: '#/announcements',
                    },
                ],
            },
            {
                name: '后台管理',
                logo: 'fa-cogs',
                childrens: [
                    {
                        name: '权限管理',
                        url: '#/permission/manage',
                    },
                    {
                        name: '管理后台用户',
                        url: '#/user/admin',
                    },
                    {
                        name: '管理角色权限',
                        url: '#/user/role',
                    },
                    {
                        name: '支付宝订单查询',
                        url: '#/alipay/order',
                    },
                    {
                        name: '操作日志',
                        url: '#/user/log',
                    },
                ],
            }
        ];
        $rootScope.navigation = permissionToShow(admin, $rootScope.navigation);
        /**
         * 获取导航路径
         */
        var getNavIndexPath = function(url, parentNav){
            var paths = [];
            var childPaths = [];
            for (i in parentNav) {
                var row = parentNav[i];
                var index = i;
                if (row.childrens != undefined && row.childrens.length > 0) {
                    // 搜索儿子
                    childPaths = getNavIndexPath(url, row.childrens);
                    if (childPaths.length > 0) {
                        paths.push(index);
                        paths = paths.concat(childPaths);
                        break;
                    }
                } else if(url == row.url) {
                    paths.push(index);
                    break;
                }
            }
            return paths;
        }
        /**
         * 根据路径设置页面基础数据
         */
        var setPageData = function(paths, parentNav) {
            var index = paths[0];
            if (paths.length <= 0) {
                return false;
            }
            if (paths.length == 1) {
                $rootScope.pageData.title = parentNav[index].name;
            } else if(paths.length > 1) {
                setPageData(paths.splice(1, paths.length - 1), parentNav[index].childrens);
            }
            $rootScope.pageData.pathlist.push(parentNav[index]);
        }
        // 路由变更成功
        $rootScope.$on("$routeChangeSuccess", function() {
            var url = '#' + $location.path();
            var paths = getNavIndexPath(url, $rootScope.navigation);
            $rootScope.pageData.brief = '';
            $rootScope.pageData.pathlist = [];
            setPageData(paths, $rootScope.navigation);
            $rootScope.pageData.pathlist = $rootScope.pageData.pathlist.reverse();
        });
        // 页面加载完成
        $rootScope.$on("$viewContentLoaded", function() {
            $.AdminLTE.layout.activate();
        });
    }]);
});
