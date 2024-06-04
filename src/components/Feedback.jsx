import React from "react";
import "./Feedback.css";
import { GoArrowRight } from "react-icons/go";

const Feedback = () => {
  return (
    <div className="container-feed">
      <div className="flex-tab">
        <p className="text">
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to run their demand forecast manually. cleverBooks
          automates all the workflows and helps brands predict high demand
          periods and be ready to cater to customer demands. It has a direct
          impact on the revenue readiness of a company and that's the value we
          see cleverBooks unlocking for many companies in the future. Rahul and team
          have built a robust product with years of their experience distilled
          into the workflows.
        </p>
        <div className="profile">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
            alt="Rahul"
            className="dp"
          />
          <div className="profileName">
            <p className="name">ALPANA day</p>
            <p className="designation">CEO,Samosa party</p>
          </div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="buttonContainer">
          <div className="left">
            <button className="button">
              <div className="button-box">
                <span className="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                  </svg>
                </span>
                <span className="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
          <div className="right">
            <button className="button">
              <div className="button-box">
                <span className="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      transform="rotate(180, 23, 20)"
                      d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                    />
                  </svg>
                </span>
                <span className="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path
                      transform="rotate(180, 23, 20)"
                      d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="cardd">
          <div className="cardds">
            <h2>upto 95%</h2>
            <p>Demand Fulfilment</p>
          </div>
          <div className="cardds">
            <h2> &lt; 3%</h2>
            <p>Daily Stock-out</p>
          </div>
          <div className="cardds">
            <a
              href="https://www.getcleverBooks.ai/customer-stories/cleverBooks-helps-samosa-party-fulfil-95-of-their-customer-demand"
              className="read"
            >
                <p>Read story</p>
                <GoArrowRight className="icon-a" />
            </a>
          </div>
        </div>
      </div>
      <div className="img-cards">
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp" alt="" />
      </div>
    </div>
  );
};

export default Feedback;
