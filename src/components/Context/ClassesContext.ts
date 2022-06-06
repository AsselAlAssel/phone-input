import { createContext } from "react";
import { OverridableClasses } from "../types/types";

export const Classes=createContext<Partial<Record<OverridableClasses, string>>
>({});
