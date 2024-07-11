import { MockDataItem } from "../../../types/types";
import { Badge } from "../Badge";
import { IconButton } from "../IconButton";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr } from "./Tr";

// todo: make this re-usable

interface TableProps {
  data: MockDataItem[];
}
export const Table = ({ data = [] }: TableProps) => {
  return (
    <table className="w-full">
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Name</Th>
          <Th>Tags</Th>
          <Th>Last Updated</Th>
          <Th>Actions</Th>
        </Tr>
      </thead>
      <tbody>
        {data.map((workflow) => (
          <Tr key={workflow.uuid}>
            <Td className="text-[#868686]">{workflow.type}</Td>
            <Td className="font-medium">{workflow.name}</Td>
            <Td className="font-medium">
              <div className="flex gap-2">
                {workflow.tags.map((tag) => (
                  <Badge key={tag + workflow.uuid}>{tag}</Badge>
                ))}
              </div>
            </Td>
            <Td className="text-[#868686]">{workflow.last_updated}</Td>
            <Td>
              <div className="flex gap-2">
                {workflow.actions.map((action) => {
                  const icon =
                    action === "edit" ? <EditIcon /> : <DeleteIcon />;
                  return (
                    <IconButton
                      key={action + workflow.uuid}
                      ariaLabel={action}
                      icon={icon}
                    />
                  );
                })}
              </div>
            </Td>
          </Tr>
        ))}
      </tbody>
    </table>
  );
};
