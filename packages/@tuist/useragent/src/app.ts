import { IAction, IContext } from 'overmind'

import { HooksConfig } from '@tuist/hooks'
import { UseragentConfig } from './types'

export type Config = UseragentConfig & HooksConfig

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
export type AsyncAction<Input = void, Output = void> = IAction<
  Config,
  Input,
  Promise<Output>
>
export type Context = IContext<Config>
