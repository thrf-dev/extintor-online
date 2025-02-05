import React from "react";

const Maps = () => {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5615492399843!2d-45.898677525068166!3d-23.222644079034097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a85aa927501%3A0x2c9159176640a10f!2sR.%20Castor%2C%2025%20-%20Jardim%20Sat%C3%A9lite%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012230-320!5e0!3m2!1spt-BR!2sbr!4v1738408208825!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Maps;
