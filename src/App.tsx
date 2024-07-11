import { AsideMenu } from "./components/AsideMenu";
import { ErrorMessage } from "./components/ErrorMessage";
import { Header } from "./components/Header";
import { Spinner } from "./components/ui/Spinner";
import { Table } from "./components/ui/Table/Table";
import { useExecuteAirOpsApp } from "./hooks/useExecuteAirOpsApp";
import { MockDataResponse } from "./types/types";

function App() {
  const { data, isLoading, isError } = useExecuteAirOpsApp<MockDataResponse>({
    appId: "bf14cdf5-a0a2-48bd-884f-0fb1c4769108",
    version: 3,
    // todo: we could use the input value of the search to make the llm return a list of values that matches that search
  });

  return (
    <div className="h-screen text-lg flex w-full">
      <AsideMenu />
      <div className="w-full">
        <Header />
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Spinner />
          </div>
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <Table data={data?.mock_data || []} />
        )}
      </div>
    </div>
  );
}

export default App;
