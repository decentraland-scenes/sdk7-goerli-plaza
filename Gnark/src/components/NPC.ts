
const COMPONENT_ID = 2066

export enum gnarkStates {
	WALKING,
	TURNING,
	YELLING	
}


const NPCData = {
	state: Schemas.Enum<gnarkStates>(Schemas.Int),
	previousState: Schemas.Enum<gnarkStates>(Schemas.Int)
  }

export const NPComponent = engine.defineComponent(NPCData, COMPONENT_ID )
