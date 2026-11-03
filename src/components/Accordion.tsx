import { Link } from "wouter-preact";
import '../styles/accordion.css'
import { HeartIcon } from "./Icons";
import type { Recipe } from "../types";
import { useApp } from "../data/app";

type AccordionProps = {
  item: Recipe;
  onToggle: () => void;
  isOpen: boolean;
  isFav: boolean;
}

export default function Accordion({ item, onToggle, isOpen, isFav }: AccordionProps) {
  const { actions } = useApp();

  return (
    <div class="accordion">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
        <button
          onClick={() => actions.toggleFav(item.id)}
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
          onClick={onToggle}
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
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</span>
          <span style={{
            fontSize: '24px',
          }} class="hand">{item.time} min</span>
        </button>
      </div>

      {isOpen &&
        <div class="accordion-content">
          <p>{item.description}</p>
          <p>{item.kcal} kcal | serves {item.base}</p>
          <div class="button-group">
            <button>+ Add to list</button>
            <Link class="link-button" href={`/recipe/${item.id}`}>Open full recipe</Link>
          </div>
        </div>
      }
    </div>
  )
}