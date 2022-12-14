import { engine, Schemas } from "@dcl/sdk/ecs";

enum CustomComponentIds {
    MovingPlatform = 2002,
    TriggerArea = 2003
}

export const MovingPlatform = engine.defineComponent(
    {
        waypoints: Schemas.Array(Schemas.Vector3),
        previousWaypointIndex: Schemas.Number,
        targetWaypointIndex: Schemas.Number,
        currentLerpTimeBetweenWaypoints: Schemas.Number,
        speed: Schemas.Number,
        pingPong: Schemas.Boolean,
        moving: Schemas.Boolean
    },
    CustomComponentIds.MovingPlatform
)
export const TriggerArea = engine.defineComponent(
    {
        size: Schemas.Vector3,
        centerOffset: Schemas.Vector3
    }, CustomComponentIds.TriggerArea
)