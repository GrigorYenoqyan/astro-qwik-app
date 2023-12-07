import { XataClient } from "./index";

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  return instance;
};
