import { ComponentChildren } from 'preact'
import { TopBar } from '../../components/TopBar'
import polkadotLogo from '../../assets/polkadot.svg'

type Props = {
  children: ComponentChildren
}

function Sidebar() {
  return (
    <div className="basis-1/4 xl:basis-1/5">
      <div className="w-36 ml-5 mt-5">
        <img src={polkadotLogo} alt="Polkadot logo" />
      </div>
    </div>
  )
}

export function Page({ children }: Props) {
  return (
    <div className="min-h-full flex w-full">
      <Sidebar />
      <div className="bg-gray-200 w-full">
        <TopBar />
        {children}
      </div>
    </div>
  )
}
