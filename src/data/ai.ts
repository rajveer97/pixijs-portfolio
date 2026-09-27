export interface WorkflowStep {
  id: string
  label: string
  note: string
  ai: boolean
}

export const aiWorkflow: WorkflowStep[] = [
  { id: 'idea', label: 'Idea', note: 'Define the problem, not the feature list.', ai: false },
  {
    id: 'research',
    label: 'Research',
    note: 'Understand the constraints before choosing an approach.',
    ai: true,
  },
  {
    id: 'architecture',
    label: 'Architecture',
    note: 'Decide the structure myself, deliberately.',
    ai: false,
  },
  {
    id: 'exploration',
    label: 'AI-Assisted Exploration',
    note: 'Compare approaches and edge cases quickly.',
    ai: true,
  },
  {
    id: 'implementation',
    label: 'Implementation',
    note: 'Write the code, own every line.',
    ai: true,
  },
  { id: 'testing', label: 'Testing', note: 'Verify behavior, not assumptions.', ai: true },
  {
    id: 'review',
    label: 'Review',
    note: 'AI as a second opinion — judgment stays human.',
    ai: true,
  },
  {
    id: 'refactor',
    label: 'Refactor',
    note: 'Improve structure before it becomes debt.',
    ai: true,
  },
  { id: 'deploy', label: 'Deploy', note: 'Ship it, then learn from it in production.', ai: false },
]

export const aiAccelerates = [
  'Exploring alternative implementations',
  'Scaffolding boilerplate and structure',
  'Generating test cases and edge cases',
  'Debugging and log analysis',
  'Documentation and refactor suggestions',
  'Second-opinion code review',
]

export const humanOwns = [
  'Architecture and design decisions',
  'Code quality and correctness',
  'Testing strategy',
  'Security and data handling',
  'Final understanding of everything shipped',
]
