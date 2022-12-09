import logo from './logo.svg';
import './App.css';
import {
    StyledButton,
    FancyButton,
    SubmitButton,
    AnimatedLogo,
} from './components/Button';

function App() {
    return (
        <div className="App">
            <AnimatedLogo src={logo} alt="logo" />
            <div>
                <br />
            </div>
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
