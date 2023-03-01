import AccountSelect from './AccountSelect'
import { Link } from 'react-router-dom'

export function TopBar() {
  return (
    <header className="flex w-full justify-end p-4">
      <ul className="flex w-full justify-center p-4">
        <li className="mr-6">
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-multisig">Create multisig</Link>
        </li>
      </ul>
      <AccountSelect />
    </header>
  )
}
