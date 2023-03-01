import { Page } from './templates/base'
import { CenteredCard } from '../components/centered-card'
import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <Page>
      <CenteredCard>
        <Link to="/create-multisig">
          <button className="py-3 px-6 bg-slate-800 text-white">
            New multisig
          </button>
        </Link>
      </CenteredCard>
    </Page>
  )
}
