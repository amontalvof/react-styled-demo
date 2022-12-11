import { ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import {
    StyledButton,
    FancyButton,
    SubmitButton,
    AnimatedLogo,
    DarkButton,
} from './components/Button';

const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    },
    fontFamily: 'Gill Sans',
};

const GlobalStyle = createGlobalStyle`
    button {
        font-family: ${(props) => props.theme.fontFamily};
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className="App">
                <AnimatedLogo src={logo} alt="logo" />
                <div>
                    <br />
                </div>
                <StyledButton>Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <StyledButton variant="outline">Outline Button</StyledButton>
                <div>
                    <br />
                </div>
                <FancyButton as="a">Fancy Button</FancyButton>
                <div>
                    <br />
                </div>
                <SubmitButton>Submit Button</SubmitButton>
                <div>
                    <br />
                </div>
                <DarkButton>Dark Button</DarkButton>
            </div>
        </ThemeProvider>
    );
}

export default App;
