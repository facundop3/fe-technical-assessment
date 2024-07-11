import { Button } from "./ui/Button";
import { ListItem } from "./ui/ListItem";
import { AddIcon } from "./ui/icons/AddIcon";
import { ChartIcon } from "./ui/icons/ChartIcon";
import { DatabaseIcon } from "./ui/icons/DatabaseIcon";
import { SettingsIcon } from "./ui/icons/SettingsIcon";

export const AsideMenu = () => {
  return (
    <aside className="w-1/6 mt-0.5 mb-1.5 h-full border-r border-[#E6E6E6]">
      <div className="flex flex-col gap-2 p-2 items-center">
        <div className="flex gap-2 align-center w-full px-[9px] font-semibold">
          <div className="bg-brand rounded-md w-9 h-9"></div>
          AirOps
        </div>
        <div className="w-full">
          <Button className="w-full" rightIcon={<AddIcon />}>
            New
          </Button>
        </div>
      </div>
      <ul className="px-2">
        <ListItem>
          <DatabaseIcon /> Data Name
        </ListItem>
        <ListItem>
          <ChartIcon /> Monitoring
        </ListItem>
        <ListItem>
          <SettingsIcon /> Data Name
        </ListItem>
      </ul>
    </aside>
  );
};
