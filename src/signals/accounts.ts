import { effect, signal } from '@preact/signals'
import { WalletAccount } from '@talisman-connect/wallets'
import { getAccounts } from '../util/accounts'
import { retrieveStored } from '../util/localStorage'

export const accounts = signal<WalletAccount[]>([])
accounts.value = await getAccounts()

const storedAccount = retrieveStored('defaultAccount')
const storedExtension = retrieveStored('defaultExtension')

export const defaultAccount = signal(storedAccount)
export const defaultExtension = signal(storedExtension)

if (!storedAccount && accounts.value.length > 0) {
  defaultAccount.value = accounts.value[0]
}

effect(
  () =>
    defaultAccount.value &&
    localStorage.setItem(
      'defaultAccount',
      JSON.stringify(defaultAccount.value),
    ),
)
