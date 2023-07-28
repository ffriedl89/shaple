import { useSelector } from "./useSelector";

export const useTheme = () => useSelector((state) => state.theme);
