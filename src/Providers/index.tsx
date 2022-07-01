import { DataBaseProvider } from './Database';

export default ({ children }) => (
  <DataBaseProvider>{children}</DataBaseProvider>
);
