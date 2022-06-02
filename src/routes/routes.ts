import React from "react";
import {HomeOutlined,} from "@ant-design/icons";

export interface IRouteProps {
    path: string;
    name: string;
    hideInMenu?: boolean;
    icon?: React.ExoticComponent<any>;
    element?: React.LazyExoticComponent<any>;
    redirect?: string;
    routes?: IRouteProps[];
}

const Home = React.lazy(() => import("../features/home/Home"));

export const routes: IRouteProps[] = [
    {
        path: "/",
        name: "首页",
        hideInMenu: true,
        icon: HomeOutlined,
        redirect: "/home"
    },
    {
        path: "/home",
        name: "首页",
        icon: HomeOutlined,
        element: Home
    }
]
