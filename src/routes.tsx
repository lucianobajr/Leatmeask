import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import NotFound from "./pages/NotFound";

const routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default routes;
