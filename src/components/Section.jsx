function Section({ title, children, className }) {
    return (
        <section className={className ? `section ${className}` : 'section'}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;