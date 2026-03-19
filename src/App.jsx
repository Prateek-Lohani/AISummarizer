import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'

const App = () => {
  return (
    <main>
    <div className="flex flex-col items-center">
        <Hero/>
        <Demo/>
    </div>
    </main>
  )
}

export default App