import { Schemas, engine } from "@dcl/sdk/ecs"

const COMPONENT_ID = 2047

const Vector3EcsSchema = Schemas.Map({
  x: Schemas.Float,
  y: Schemas.Float,
  z: Schemas.Float
})

const PathData = {
  path: Schemas.Array(Vector3EcsSchema),
  origin: Schemas.Float,
  target: Schemas.Float,
  paused: Schemas.Boolean
}

export const PathDataComponent = engine.defineComponent(PathData, COMPONENT_ID)
