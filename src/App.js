import './App.css';
import { StyledButton, FancyButton } from './components/Button';

function App() {
    return (
        <div className="App">
            <StyledButton>Styled Button</StyledButton>
            <div>
                <br />
            </div>
            <StyledButton variant="outline">Styled Button</StyledButton>
            <div>
                <br />
            </div>
            <FancyButton as="a">Fancy Button</FancyButton>
        </div>
    );
}

export default App;
