import { ComponentChildren } from 'preact'
import { NavBar } from '../../components/NavBar'
import { TopBar } from '../../components/TopBar'

type Props = {
  children: ComponentChildren
}

export function Page({ children }: Props) {
  return (
    <div className="min-h-full">
      <TopBar />
      <NavBar />
      <div className="bg-blue-100 flex justify-center ">
        <div className="p-4 w-8/12">{children}</div>
      </div>
    </div>
  )
}
