import { createFileRoute } from '@tanstack/react-router'
import Design1 from '../components/Design1'

export const Route = createFileRoute('/design1')({
  component: Design1,
})
