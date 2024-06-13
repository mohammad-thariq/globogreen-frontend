import Image from "next/image";
import React from "react";

 export default function ProductCard(){
    return (
        <div>
        <a href="#" className="card">
            <div className="card__image">
              <Image height="100%" width="100%" src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="" />
            </div>
        <div>
          <p>this is the nice product to buy in the shop and all the best</p>
        </div>
          <div className="card__info">
            <p><b>Price:</b> ETH 2.00</p>
            <p>($3,565.48)</p>
          </div>
          <div className="card__footer">
            <span className="card__btn card__btn--secondary">View history</span>
            <span className="card__btn card__btn--primary">Buy Now</span>
          </div>
        </a>
        <a href="#" className="card">
            <div className="card__image">
              <Image height="100%" width="100%" src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="" />
            </div>
        <div className="card__info">
          <p>this is the nice product to buy in the shop and all the best</p>
        </div>
          <div className="card__info">
            <p> ETH 2.00</p>
            <p>($3,565.48)</p>
          </div>
          {/* <div className="card__footer">
            <span className="card__btn card__btn--secondary">View history</span>
            <span className="card__btn card__btn--primary">Buy Now</span>
          </div> */}
        </a>
        </div>
        )
}