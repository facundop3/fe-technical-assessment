import { Dropdown } from "./ui/Dropdown";
import { Heading } from "./ui/Headding";
import { Input } from "./ui/Input";
import { SearchIcon } from "./ui/icons/SearchIcon";

export const Header = () => {
  return (
    <header className="px-5 pt-5 flex  w-full justify-between h-20 border-b-[0.5px] border-b-[#ECEDEF]">
      <Heading>Workflows</Heading>
      <div className="flex gap-2 h-8">
        <Dropdown>Sort</Dropdown>
        <Input placeholder="Search workflows" leftIcon={<SearchIcon />} />
      </div>
    </header>
  );
};
