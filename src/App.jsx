import 'bootstrap/dist/css/bootstrap.min.css';
import AgentList from "./Components/AgentList";
import AgentContextProvider from './Context/AgentContextProvider';

const App = () => {
    return (
        <AgentContextProvider>
            <AgentList/>
        </AgentContextProvider>
    )
}

export default App;