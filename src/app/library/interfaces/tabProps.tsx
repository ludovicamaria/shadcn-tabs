import type { ReactNode } from "react";

export interface TabProps {
    tabDefaultValue: string;
    tabValue1: string;
    tabName1: string;
    tabValue2: string;
    tabName2: string;
    tabContent: ReactNode
}