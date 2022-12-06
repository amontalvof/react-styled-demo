import './App.css';
import StyledButton from './components/Button';

function App() {
    return (
        <div className="App">
            <StyledButton>Styled Button</StyledButton>
            <div>
                <br />
            </div>
            <StyledButton variant="outline">Styled Button</StyledButton>
        </div>
    );
}

export default App;
