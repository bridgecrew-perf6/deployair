import React from "react";
import "./Card.css";
import sun from "../img/sun.png";
import humidity from "../img/humidity.png";
import co2 from "../img/co2.png";
import pressure from "../img/pressure.png";
import thermometer from "../img/thermometer.png";
import { useEffect } from "react";
import { db } from "../firebaseutils";
import { useState } from "react";
const Card = () => {
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    try {
      db.collection("datasFromPI")
        .orderBy("timestap", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs[0].data());
          setCurrentData(snapshot.docs[0].data());
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="overviewInfo">
          <div className="actions"></div>

          <div className="productinfo">
            <div className="grouptext">
              <h3>TÜRKİYE</h3>
              <p></p>
            </div>
            <div className="grouptext">
              <h3>DATE</h3>
              <p>11.03.2020</p>
            </div>
            <div className="grouptext">
              <h3>WEATHER</h3>
              <h1>25°C</h1>
            </div>

            <div className="productImage">
              <img src={sun} alt="" />
            </div>
          </div>
        </div>

        <div className="productSpecifications">
          <h1>Air Quality Values </h1>

          <div className="productFeatures">
            <div className="feature">
              <div className="featureIcon">
                <img src={humidity} alt="" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>HUMIDITY</strong>
                </p>
                <p>{currentData.humidity}%</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <img src={pressure} alt="" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>PRESSURE</strong>
                </p>
                <p>
                  {currentData.pressure} <sub>hPa</sub>
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <img src={co2} alt="" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>CO2</strong>
                </p>
                <p>
                  {currentData.co2}
                  <sub>ppm</sub>
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="featureIcon">
                <img src={thermometer} alt="" />
              </div>
              <div className="featureText">
                <p>
                  {" "}
                  <strong>Temperature</strong>
                </p>
                <p>{currentData.temperature}°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
