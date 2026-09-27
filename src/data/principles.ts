export interface Principle {
  id: string
  index: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    id: 'understand',
    index: '01',
    title: 'Understand Before Building',
    body: 'I read the code, trace the behavior and understand the constraint before I change anything.',
  },
  {
    id: 'architecture',
    index: '02',
    title: 'Architecture Over Code',
    body: 'Structure first. A clean design makes the implementation obvious instead of heroic.',
  },
  {
    id: 'performance',
    index: '03',
    title: 'Performance Is a Feature',
    body: 'Frame budgets, memory and load time are engineering requirements, not polish added at the end.',
  },
  {
    id: 'readable',
    index: '04',
    title: 'Readable Over Clever',
    body: 'The next person reading this — including future me — should understand it immediately.',
  },
  {
    id: 'ship',
    index: '05',
    title: 'Ship, Measure, Iterate',
    body: 'Real feedback beats theory. I put work in front of people and improve from what actually happens.',
  },
  {
    id: 'ai',
    index: '06',
    title: 'AI Is an Accelerator, Not an Authority',
    body: 'AI helps me move faster and catch what I miss. It never owns the decision or the outcome.',
  },
]
