import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import type { TabProps } from "../interfaces/tabProps";

export const TabComponent = (tabProps: TabProps) => {
  return (
      <Tabs defaultValue={tabProps.tabDefaultValue} className="w-full max-w-5xl text-2xl">
        <TabsList className="mb-6" />
        <TabsList className="mb-8 border-1 border-amber-200 bg-amber-200">
          <TabsTrigger value={tabProps.tabValue1} className="text-xl px-6 py-3 ">
            {tabProps.tabName1}
          </TabsTrigger>
          <TabsTrigger value={tabProps.tabValue2} className="text-xl px-6 py-3">
            {tabProps.tabName2}
          </TabsTrigger>
        </TabsList>
        {tabProps.tabContent}
      </Tabs>
  );
}

export default TabComponent;