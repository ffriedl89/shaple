import { useSelector } from "./useSelector";

export const useConfig = () => useSelector((state) => state.config);
