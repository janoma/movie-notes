import { FC } from "react";

import { useAppSelector } from "./app/hooks";
import Landing from "./components/Landing";
import sessionSlice from "./features/session";

const App: FC = () => {
  const userId = useAppSelector(sessionSlice.selectors.userId);

  return userId ? <>Hello</> : <Landing />;
};

export default App;
