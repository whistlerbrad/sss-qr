import './SSSResources.css'

const RESOURCES = [
  {
    title: 'SSS Trail Map',
    url: 'https://wbmountain.maps.arcgis.com/apps/dashboards/8bbbd2db804e41908d3bdb0f934b5e8a',
    description: 'Whistler Blackcomb trail map and conditions'
  },
  {
    title: 'Flaik Training',
    url: 'https://whistler.flaik.com',
    description: 'Whistler Blackcomb instructor tools'
  },
  {
    title: 'Instructor Schedule',
    url: 'https://instructor.snow.com/snow/instructorTools.asp',
    description: 'Vail Resorts instructor tools and schedule'
  }
]

export function SSSResources() {
  return (
    <div className="sss-resources-page">
      <h1 className="sss-resources-title">SSS Resources</h1>
      <p className="sss-resources-subtitle">Quick links to trail map, training, and instructor tools</p>

      <div className="sss-resources-cards">
        {RESOURCES.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sss-resources-card"
          >
            <h2 className="sss-resources-card-title">{resource.title}</h2>
            <p className="sss-resources-card-desc">{resource.description}</p>
            <span className="sss-resources-card-arrow" aria-hidden>→</span>
          </a>
        ))}
      </div>
    </div>
  )
}
