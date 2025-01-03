import { ReactFlowProvider } from '@xyflow/react';
import DnDFlow from './components/DnDFlow';
import { Provider } from 'react-redux';
import store from './Store/store';

const App = () => (
  <ReactFlowProvider>
  <Provider store={store}>
      <DnDFlow />
  </Provider>
  </ReactFlowProvider>
);

export default App;
