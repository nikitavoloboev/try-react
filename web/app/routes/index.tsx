import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <div>test build</div>
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
