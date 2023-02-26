import { Page } from './templates/base'
import { defaultAccount } from '../signals/accounts'

export function CreateMultisig() {
  return (
    <Page>
      <h1>Create multisig page</h1>
      <p>Selected account: {defaultAccount.value?.name}</p>
    </Page>
  )
}
