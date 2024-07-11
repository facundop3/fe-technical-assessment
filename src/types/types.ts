export type Action = "edit" | "delete";

export interface MockDataItem {
  type: "Workflow" | "Agent";
  name: string;
  tags: string[];
  last_updated: string;
  actions: Action[];
  uuid: string;
}

export interface MockDataResponse {
  mock_data: MockDataItem[];
}
