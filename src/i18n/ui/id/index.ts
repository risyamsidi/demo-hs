import { idChrome } from "./chrome";
import { idDemo } from "./demo";
import { idPages } from "./pages";
import { idReading } from "./reading";

export const id = {
  ...idChrome,
  ...idDemo,
  ...idPages,
  ...idReading,
} as const;

export default id;
