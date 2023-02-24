import { ComponentChildren } from "preact";
import { Link } from "react-router-dom";


type Props = {
  children: ComponentChildren;
}

export function Page({ children }: Props) {
  return <>
    <header className="header">
      Header
    </header>
    <ul className="flex w-full justify-center p-4">
      <li className="mr-6"><Link to="/">Dashboard</Link></li>
      <li><Link to="/create-multisig">Create multisig</Link></li>
    </ul>
    <main className="flex w-full justify-center p-4">
      {children}
    </main>
  </>
}