import { Component, MouseEvent } from "react";

interface IProps {
  images: string[];
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // componentDidMount(){

  // }

  // componentDidUpdate(){

  // }
  // componentWillUnmount(){

  // }

  // shouldComponentUpdate(){

  // }

  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
      this.setState({
        active: +e.target.dataset.index,
      });
    }
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />

        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
