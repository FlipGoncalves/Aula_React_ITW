import Carousel from "react-bootstrap/Carousel";
import og1 from '../images/og1.jpg'
import og2 from '../images/og2.jpg'

function CarrocaL() {

    return(
          <Carousel fade variant="dark" md>
            <Carousel.Item>
              <div className="section-2">
                <img
                  style={{objectFit: "fill", width:"100%"}}
                  className="d-block w-100 h-100"
                  src={og1}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="section-2">
                <img
                  style={{objectFit: "fill", width:"100%"}}
                  className="d-block w-100 h-100"
                  src={og2}
                  alt="Second slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
    );
}
export default CarrocaL;
