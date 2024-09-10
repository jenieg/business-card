import portrait from '../assets/portrait.jpg'

export default function Contact() {
    return (
        <div className="container">
            <img src={portrait} alt="Portrait" />
            <h1>Jennifer Godfrey</h1>
            <h2>Software Engineer</h2>
            <a href="http://jenie.netlify.app">Portfolio</a>
            <a href="https://www.linkedin.com/in/jeniemg/">LinkedIn</a>
        </div>
    )
}