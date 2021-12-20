import { createContext } from "react";
import { User } from "../utils/types";

export const CurrentUserContext = createContext<User | undefined>(undefined);