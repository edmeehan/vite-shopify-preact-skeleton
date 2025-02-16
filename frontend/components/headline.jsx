import register from 'preact-custom-element'

function Headline () {
  return (
    <h1>This is my headline</h1>
  )
}

customElements.get('x-headline') || register(Headline, 'x-headline');