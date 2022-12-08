import './App.css';
import { StyledButton, FancyButton, SubmitButton } from './components/Button';

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
            <div>
                <br />
            </div>
            <SubmitButton>Submit Button</SubmitButton>
        </div>
    );
}

export default App;
