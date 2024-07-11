import AirOps from "@airops/airops-js";
import {
  ExecuteParams,
  ExecuteResponse,
} from "@airops/airops-js/dist/ts/types";
import { useEffect, useRef } from "react";

const airopsInstance = AirOps.identify({
  userId: import.meta.env.VITE_USER_ID,
  workspaceId: import.meta.env.VITE_WORKSPACE_ID,
  hashedUserId: import.meta.env.VITE_HASHED_USER_ID,
});

import { useState } from "react";

export const useExecuteAirOpsApp = <T>(executeParams: ExecuteParams) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const onGoingReqRef = useRef<ExecuteResponse | null>(null);

  useEffect(() => {
    const executeApp = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await airopsInstance.apps.execute(executeParams);
        onGoingReqRef.current = response;
        const results = await response.result();
        setData(results.output as T);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    executeApp();

    return () => {
      onGoingReqRef.current && onGoingReqRef.current.cancel();
    };
  }, []);

  return { data, isLoading, isError };
};
