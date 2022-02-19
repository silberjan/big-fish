import { Connection, ViewEntity } from 'typeorm'
import { GameEntity } from './Game'

// @ViewEntity({
//   expression: (connection: Connection) =>
//     connection.createQueryBuilder(GameEntity, 'game').loadRelationIdAndMap('sets', 'set'),
// })
// export class FullGame extends GameEntity {}
