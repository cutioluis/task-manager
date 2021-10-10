import { TaskProvider } from "../context/TaskContext";
import { GlobalStyles } from "../styles/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <GlobalStyles />
      <Component {...pageProps} />;
    </TaskProvider>
  );
}

export default MyApp;
