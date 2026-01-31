interface QRSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function QRSection({ title, description, imageSrc, imageAlt }: QRSectionProps) {
  return (
    <section className="qr-section">
      <h2>{title}</h2>
      <p className="section-desc">{description}</p>
      <div className="qr-wrap">
        <img src={imageSrc} alt={imageAlt} width={280} height={280} decoding="async" />
      </div>
    </section>
  )
}
