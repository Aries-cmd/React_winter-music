import { Navigate, useRoutes } from "react-router-dom";

import WINDiscover from "@/pages/discover";
import WINFriend from "@/pages/friend";
import WINMine from "@/pages/mine";
import NoFound from "@/pages/no-found";

// discover 子路由
import Recommend from "../pages/discover/cpns/recommend";
import Ranking from "../pages/discover/cpns/ranking";
import Songs from "../pages/discover/cpns/songs";
import Djradio from "../pages/discover/cpns/djradio";
import Artist from "../pages/discover/cpns/artist";
import Album from "../pages/discover/cpns/album";

function Router() {
  let routes = useRoutes([
    { path: "/", element: <Navigate to="/discover" /> },
    {
      path: "/discover",
      element: <WINDiscover />,
      children: [
        { index: true, element: <Recommend /> },
        {path: "ranking", element: <Ranking/>},
        {path: "songs", element: <Songs/>},
        {path: "djradio", element: <Djradio/>},
        {path: "artist", element: <Artist/>},
        {path: "album", element: <Album/>}
      ],
    },
    { path: "/my", element: <WINMine /> },
    { path: "/friend", element: <WINFriend /> },
    { path: "*", element: <NoFound /> },
  ]);

  return routes;
}

export default Router;
