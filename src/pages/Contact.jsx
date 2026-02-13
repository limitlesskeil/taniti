import Container from '../components/Container'

export default function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <p className="contact-intro">
        Have questions about visiting Taniti? We&apos;d love to hear from you.
      </p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:info@taniti.gov">info@taniti.gov</a>
      </p>
      <p>
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
      <p>
        <strong>Address:</strong> Taniti Visitor Center, 123 Harbor Way, Taniti
        City
      </p>
    </Container>
  )
}
