export const SLOT_SPECS = [
  { w: 340.068, h: 311.085, left: 23.3, top: 351.9, rot: 1.71, radius: 24 },
  { w: 270.422, h: 179.664, left: 46, top: 292, rot: -7.47, radius: 20 },
  { w: 200.383, h: 133.131, left: 101.61, top: 244, rot: 7.95, radius: 20 },
];
export const ILLO_SPEC = { w: 211.417, h: 227, left: 170, top: 461 };
export const DECO_SPEC = { w: 364.96968, h: 214.9235, left: -33, top: 452, rot: 46.1 };
export const SLOT_COUNT = SLOT_SPECS.length;

export type DeckGeom = {
  W: number[];
  H: number[];
  L: number[];
  T: number[];
  ROT: number[];
  RAD: number[];
};
