import { Link } from "wouter-preact";
import '../styles/bottom-nav.css'

export default function BottomNav() {
  return (
    <div class="bottom-nav" >
      <Link href="/" class="nav-link" aria-label="Menu">
        menu
      </Link>
      <Link href="/plan" class="nav-link" aria-label="Plan">
        plan
      </Link>
      <Link href="/list" class="nav-link" aria-label="List">
        list
      </Link>
      <Link href="/log" class="nav-link" aria-label="Log">
        log
      </Link>
    </div >
  )
}