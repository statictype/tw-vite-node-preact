import { WalletAccount } from '@talisman-connect/wallets/types'

export const fakeAccounts: WalletAccount[] = [
  {
    name: 'Alice',
    address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    source: 'polkadot-js',
  },
  {
    name: 'Bob',
    address: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
    source: 'polkadot-js',
  },
  {
    name: 'Charlie',
    address: '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
    source: 'polkadot-js',
  },
]

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getAccounts() {
  await sleep(500)
  return fakeAccounts
}
