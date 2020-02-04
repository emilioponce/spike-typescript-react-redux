# Create-react-app Redux & TypeScript

Spike to evaluate the advantages of using typecript with react and redux.

_Only sync actions were used as the distinction between sync/async actions do not have an impact for this test._

## What to check with TypeScript in our stack

- Components: shape for props (see Filters.tsx)
- Action Creators: shape for actions and payloads (see actions/types.ts)
- Reducers: shape for reducers and unused switch/case actions (see reducers/types.ts & age.ts)
- Selectors: shape for incoming state and projections (see selectors/index.ts)

## Further discussions:

- Which file/s must store the types? How to correctly organize them?
- How Typescript impact in the tests?
- Check the return types in all functions?
