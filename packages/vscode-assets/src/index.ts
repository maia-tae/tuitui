import { Block } from '@tuist/build'
import { dragdrop } from '@tuist/dragdrop'
import * as actions from './actions'
import { onInitialize } from './onInitialize'
import { settings } from './settings'
import { TuistConfig } from './types'
// Whild debugging
// import * as tree from './tuist.json'
const tree = undefined

export const tuist: Block<TuistConfig> = {
  name: 'tuist',
  dependencies: [dragdrop],
  onInitialize,
  settings,
  actions: {
    tuist: actions,
  },
  state: {
    tuist: {
      tree,
      send: () => {},
    },
  },
}
