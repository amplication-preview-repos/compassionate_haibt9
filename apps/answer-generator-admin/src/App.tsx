import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PromptList } from "./prompt/PromptList";
import { PromptCreate } from "./prompt/PromptCreate";
import { PromptEdit } from "./prompt/PromptEdit";
import { PromptShow } from "./prompt/PromptShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { StatisticsList } from "./statistics/StatisticsList";
import { StatisticsCreate } from "./statistics/StatisticsCreate";
import { StatisticsEdit } from "./statistics/StatisticsEdit";
import { StatisticsShow } from "./statistics/StatisticsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnswerGenerator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Prompt"
          list={PromptList}
          edit={PromptEdit}
          create={PromptCreate}
          show={PromptShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="Statistics"
          list={StatisticsList}
          edit={StatisticsEdit}
          create={StatisticsCreate}
          show={StatisticsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
