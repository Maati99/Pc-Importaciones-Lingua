/* eslint-disable jsx-a11y/alt-text */
import Carousel from 'react-bootstrap/Carousel'

function Inicio() {
    return (
        <div>
            <h1 className="text-danger m-3">BIENVENIDO A PC IMPORTACIONES<img className="m-3" src="data:image/png;base64,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"/></h1>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.entrepreneur.com/content/3x2/2000/1603915291-Gamers.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="text-warning card bg-secondary">
      <h3>GAMING</h3>
      <p>Todo el catalogo gamer para armar tu setup como mas te gusta</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mecaluxar.cdnwm.com/documents/20197/5214836/M12P11_12+El+stock+m%C3%ADnimo+asegura+la+continua+reposici%C3%B3n+de+mercanc%C3%ADas/af1fd247-04b8-cb3f-af66-98e6a8f27089?t=1622633983000&e=jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="text-warning card bg-secondary">
      <h3>Stock</h3>
      <p>Contamos con el stock mas completo y actulizado de Argentina</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://www.comexperu.org.pe/upload/images/actualidad_importaciones-120418-124224.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="text-warning card bg-secondary">
      <h3>Importación</h3>
      <p>Importamos todo tipo de componentes y elementos para tu pc desde los mejores paises</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
    )
}

export default Inicio
