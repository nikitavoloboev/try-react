function RouteComponent() {
  return <div>test build</div>
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
