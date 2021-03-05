import { Action } from '../app'

export const treeChanged: Action = ctx => {
  // Call to vscode
  ctx.actions.tuist.send({
    type: 'update',
    text: JSON.stringify(ctx.state.tuist.tree, null, 2),
  })
}
