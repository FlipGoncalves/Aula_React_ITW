import Carousel from "react-bootstrap/Carousel";

function CarrocaL(){


    return(
 	<Carousel fade variant="dark" md>
          <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100 h-100"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_184d4d7a30c%20text%20%7B%20fill%3A%23aaaaaa%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_184d4d7a30c%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.2109375%22%20y%3D%22216.2%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100 h-100"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_184d4d7a30b%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_184d4d7a30b%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22286.140625%22%20y%3D%22215.9%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
	</Carousel>
    );



}
export default CarrocaL;
