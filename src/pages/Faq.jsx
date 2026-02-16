import Container from '../components/Container'
import faqData from '../data/faq'

export default function Faq() {
  return (
    <Container>
      <h1>Frequently Requested Information</h1>
      {faqData.map((section) => (
        <section key={section.id} className="faq-section">
          <h2>{section.title}</h2>
          <div className="faq-list">
            {section.items.map((item) => (
              <details key={item.id} className="faq-item">
                <summary className="faq-item__question">{item.question}</summary>
                <div className="faq-item__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </Container>
  )
}
