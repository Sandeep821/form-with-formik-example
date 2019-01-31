import * as R from 'ramda'
import changeCase from 'change-case'

export function lastIndex(x) {
  return x.length - 1
}

export function last(x) {
  return x[lastIndex(x)]
}

export function callIfFunction(a, ...args) {
  return R.is(Function, a) ? a(...args) : a
}

export function getBasicFieldProps({name, label, placeholder, ...restProps}) {
  label = label || changeCase.sentenceCase(name)
  placeholder = placeholder || label
  return {
    ...restProps,
    name,
    label,
    placeholder,
  }
}

export const log = R.curry((tag, a) => {
  console.log(tag, a)
  return a
})

// profiler
export const logProfiler = ({
  ProfilerId,
  Phase,
  ActualTime,
  StartTime,
  CommitTime,
  Interactions,
  Basetime,
}) => {
  console.log({
    ProfilerId,
    Phase,
    ActualTime,
    Basetime, //time taken by react
    StartTime, //time at which render starts
    CommitTime,
    Interactions, // this is gotten from the rapping API
  })
}
