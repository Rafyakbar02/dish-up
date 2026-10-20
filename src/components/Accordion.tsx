import { Link } from "wouter-preact";
import '../styles/accordion.css'

type AccordionProps = {
  handleToggle: any;
  isOpen: boolean;
  menuName: string;
  cookingTime: number;
  description: string;
  calories: number;
  servingSize: number;
}

export default function Accordion({ handleToggle, isOpen, menuName, cookingTime, description, calories, servingSize }: AccordionProps) {
  return (
    <div class="accordion">
      <button
        onClick={handleToggle}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: 'none',
          background: 'none',
          width: '100%',
          cursor: 'pointer',
          padding: '0',
          alignItems: 'baseline',
        }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{menuName}</span>
        <span style={{
          fontSize: '24px',
        }} class="hand">{cookingTime} min</span>
      </button>

      {isOpen &&
        <div class="accordion-content">
          <p>{description}</p>
          <p>{calories} kcal | serves {servingSize}</p>
          <div class="button-group">
            <button>Add to list</button>
            <Link href="/recipe/1">Edit</Link>
          </div>
        </div>
      }
    </div>
  )
}
