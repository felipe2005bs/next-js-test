'use client';

import { ScoreDescriptions, Score } from '@/domain/constants/scoreEnum';

export default function Applications() {
  return (
    <div>
      <h1>applications:{process.env.NEXT_PUBLIC_NEXT_APP_API_URL}</h1>
      <h2>{ScoreDescriptions[Score.Neutral]}</h2>
    </div>
  );
}
