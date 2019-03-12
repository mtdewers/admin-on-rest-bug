import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "./User";
import authProvider from "./authProvider";

const App = () => (
  <Admin
    dataProvider={jsonServerProvider("http://jsonplaceholder.typicode.com")}
    authProvider={authProvider}
  >
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
