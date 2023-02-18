
const NotFound = ({requiredFullHeight}) => {
  return (
    <section className={`${requiredFullHeight && 'min-h-100vh'} not-fopund wrapper`}>
      <h2 className="feature-title">Not Found</h2>
    </section>
  )
}

export default NotFound