import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <ul className="flex w-full justify-center p-4">
      <li className="mr-6">
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/create-multisig">Create multisig</Link>
      </li>
    </ul>
  )
}
