import * as R from 'ramda'

const map = {}

const memoAsync = R.curry((cb, key, asyncPromise, value) =>
  !map[key] || !R.equals(map[key].value, value)
    ? (map[key] = {
        value,
        asyncPromise: cb(asyncPromise, value),
      }).asyncPromise
    : map[key].asyncPromise,
)

const memoValidation = memoAsync((schema, value) =>
  schema
    .validate(value)
    .then(() => null)
    .catch(err => err.errors[0]),
)

export {memoValidation}
export default memoAsync
