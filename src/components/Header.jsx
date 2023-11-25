import logo from '../assets/investment-calculator-logo.png';



export default function Header(second) {
    return(
<header id='header'>
    <img src={logo} alt="Logo showing money" />
    <h1>
Investment Calculator
    </h1>
</header>
    )
}