import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="だいたい" />

      <PostBody>
        <p>てすと段落</p>
        <h2>テストのヘッダー２</h2>
        <p>段落その次</p>
      </PostBody>
    </Container>
  )
}
