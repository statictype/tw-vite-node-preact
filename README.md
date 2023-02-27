# tw-vite-node-preact

This repo serves as a starter for the Capi Multisig App's migration to a different setup. 
It will be merged in the main repo once feedback is gathered and integrated.

## Stack
- Preact
- Tailwind
- Headless UI
- Capi
- DynamoDB
- Vite
- Node.js
- pnpm

## State management
Takes advantage of Preact's reactive primitives. 
Signals can be defined in separate files and imported in components that subscribe to changes by reading their value, without needing to pass them down as props or context
Local state can be managed with `useSignal()` and `useComputed()` as described in the [docs](https://preactjs.com/guide/v10/signals/#local-state-with-signals)

# Run locally
## Install dependencies
`pnpm install`
## Start dev server
`pnpm dev`
