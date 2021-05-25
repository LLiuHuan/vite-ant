import {RouteRecordRaw} from "vue-router";
import { localRoutes } from "../router"

export const projectName = "项目名称";//项目名称

interface Menu {
    name?: string
    icon: string
    title: string
    key:string,
    children?:Menu[]
}


export function getDocumentTitle(title:string):string {
    if (title){
        return `${projectName}-${title}`
    }else {
        return `${projectName}`
    }
}

export  function initRoutes(menus:Array<Menu>):RouteRecordRaw {
    const result : RouteRecordRaw = {
        path:'/',
        component:() => import('../components/Main.vue')
    };

    const children:Array<RouteRecordRaw> = []
    localRoutes.forEach(item => {
        matchRoute(children,item,menus);
    })
    result.children = children;
    return result
}

/**
 * 匹配路由 ： 本地路由事先定义好，但是未添加到路由列表中
 * 匹配本地路由与后端返回的路由列表，如果name相同就添加此路由
 * @param children 用来接收的路由列表
 * @param router    要匹配的本地路由
 * @param menuArr  菜单数组
 */
function matchRoute(children:Array<RouteRecordRaw>, router:RouteRecordRaw,menuArr:Array<Menu>) {
    for (let menuItem of menuArr) {
        if (menuItem.name === router.name){
            children.push(router)
            break;
        }else  if(menuItem.children){
            matchRoute(children,router,menuItem.children);
        }
    }
}