import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'preact/jsx-runtime'
import { accounts, defaultAccount } from '../signals'
import { ChevronUpDownIcon } from './icons'

const placeholder = {
  name: 'No account found',
  address: '-',
}

export default function AccountSelect() {
  return (
    <div className="w-72 mr-4">
      <Listbox
        value={defaultAccount.value}
        onChange={(a) => {
          defaultAccount.value = a
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            <span className="block truncate">
              {defaultAccount.value?.name ?? placeholder.name}
            </span>
            <ChevronUpDownIcon />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {accounts.value.map((acc) => (
                <Listbox.Option
                  key={acc.address}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                    }`
                  }
                  value={acc}
                >
                  {({ selected }: { selected: boolean }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-bold' : 'font-normal'
                        }`}
                      >
                        {acc.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
