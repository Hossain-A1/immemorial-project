
const Blog = ({requiredFullHeight}) => {
  return (
    <div className={`${requiredFullHeight && 'min-h-100vh'} blog wrapper`}>
      <h2 className="feature-title">Bolg</h2>
    </div>
  )
}

export default Blog