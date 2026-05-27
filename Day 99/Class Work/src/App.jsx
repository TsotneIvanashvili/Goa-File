import './App.css'
import running from "./assets/Running.svg"
import design from "./assets/Design.svg"
import mask from "./assets/Mask.svg"
import crypto from "./assets/crypto.svg"
import business from "./assets/business.svg"
import Card from './components/card'

function App() {

  return (
    <div className="first">
      <main>
        <Card img={running} h1="Animation" p ="Learn the latest animation techniques to create stunning motion design and captivate your audience."/>
        <Card img={design} h1="Design" p ="Create beautiful, usable interfaces to help shape the future of how the web looks."/>
        <Card img={mask} h1="Photography" p ="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."/>
        <Card img={crypto} h1="Crypto" p ="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."/>
        <Card img={business} h1="Bussiness" p ="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."/>
      </main>
    </div>
  )
}

export default App
