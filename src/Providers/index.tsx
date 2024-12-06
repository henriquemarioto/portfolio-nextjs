import { DataBaseProvider } from './Database';

const Providers = ({ children }) => (
  <DataBaseProvider>{children}</DataBaseProvider>
);

export default Providers;
