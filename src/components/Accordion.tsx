import { Link } from "wouter-preact";
import '../styles/accordion.css'
import { HeartIcon } from "./Icons";

type AccordionProps = {
  id: string;
  handleToggle: any;
  handleFav: any;
  isOpen: boolean;
  isFav: boolean;
  menuName: string;
  cookingTime: number;
  description: string;
  calories: number;
  servingSize: number;
}

export default function Accordion({ id, handleToggle, handleFav, isOpen, isFav, menuName, cookingTime, description, calories, servingSize }: AccordionProps) {

  return (
    <div class="accordion">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
        <button
          onClick={() => handleFav(id)}
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFav}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HeartIcon filled={isFav} color={'var(--cobalt)'} />
        </button>

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
      </div>

      {isOpen &&
        <div class="accordion-content">
          <p>{description}</p>
          <p>{calories} kcal | serves {servingSize}</p>
          <div class="button-group">
            <button>+ Add to list</button>
            <Link class="link-button" href={`/recipe/${id}`}>Open full recipe</Link>
          </div>
        </div>
      }
    </div>
  )
}
