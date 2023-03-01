import clsx from 'clsx'
import { Page } from './templates/base'
import { accounts, defaultAccount } from '../signals/accounts'
import { CenteredCard } from '../components/centered-card'

export function Dashboard() {
  return (
    <Page>
      <CenteredCard>
        <h1>Dashboard page</h1>
        <ul>
          {accounts.value.map((a) => (
            <li
              key={`${a.address}-${a.source}`}
              className={clsx(
                a.address === defaultAccount.value?.address && 'text-green-500',
              )}
            >
              {a.name}
            </li>
          ))}
        </ul>
      </CenteredCard>
    </Page>
  )
}
