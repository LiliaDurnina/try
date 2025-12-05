import './App.css';

import Header from './components/Header';


// 1. Исправляем типы для props
interface WayProps {
  title: string;
  description: string;
}

// 2. Исправляем функцию Way
function Way(props: WayProps) {
  console.log(props)
  return (
    <li>
      <p><strong>{props.title}</strong> {props.description}</p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>h1</h1>
        <ul>
          <Way title="111" description="5" />
          <Way title="42" description="5" />
          <Way title="5" description="5" />
        </ul>
    
      </main>
    </div>
  )
}