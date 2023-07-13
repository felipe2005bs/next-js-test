export enum Score {
  Weak = 0,
  Uncertain = 1,
  Neutral = 2,
  Strong = 3,
  Excellent = 4,
}

export const ScoreDescriptions: Record<Score, string> = {
  [Score.Weak]: "Fraco",
  [Score.Uncertain]: "Incerto",
  [Score.Neutral]: "Neutro",
  [Score.Strong]: "Forte",
  [Score.Excellent]: "Excelente",
};
