import Image from "next/image";
import { forwardRef } from "react";

const HomeEventCard = forwardRef(
  ({ id, frontSrc, frontAlt, backText }, ref) => {
    return (
      <div className="HomeEventCard" id={id} ref={ref}>
        <div className="cardWrapper">
          <div className="flipCardInner">
            <div className="flipCardFront">
              <div className="flipCardFrontInner shine-overlay">
                <div className="flipCardFrontBorder">
                  <div className="leftCornerImage">
                    <Image
                      src={"svg/flowerone.svg"}
                      width={50}
                      height={50}
                      alt="flower svg"
                    />
                  </div>
                  <div className="shine" />
                  <div className="rightCornerImage">
                    <Image
                      src={"svg/flowerone.svg"}
                      width={50}
                      height={50}
                      alt="flower svg"
                    />
                  </div>
                  <div className="middleLogo">
                    <Image
                      priority
                      src={frontSrc}
                      width={50}
                      height={50}
                      alt={frontAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flipCardBack">
              <div className="flipCardBackInner">
                <div className="flipCardBackImage">
                  <Image
                    src={"/img/shrine.jpg"}
                    width={100}
                    height={100}
                    alt="shrine"
                  />
                </div>
                <div className="flipCardBackOverlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default HomeEventCard;
