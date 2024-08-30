import React from 'react';
import "../../../css/WhyChooseUS.css"
import logo from '../../../../assets/logo.png'
import bg from "../../../../assets/767.jpg";
import oms from "../../../../assets/oms.png";
import g from "../../../../assets/g.png";
import { NavLink } from 'react-router-dom';


const WhyChooseUS = () => {
  return (
    <div id="why-choose-1485">
      <div className="cs-container">
        <div className="cs-image-group">
          {/* Top left image */}
          <picture className="cs-picture cs-picture1">
            {/* Mobile Image */}
            <source media="(max-width: 600px)" srcSet={bg} />
            {/* Tablet and above Image */}
            <source media="(min-width: 601px)" srcSet={bg} />
            <img
              loading="lazy"
              decoding="async"
              src={bg}
              alt="kid"
              width="647"
              height="600"
            />
          </picture>

          {/* Middle image */}
          <picture className="cs-picture cs-picture2">
            {/* Mobile Image */}
            <source media="(max-width: 600px)" srcSet={oms} />
            {/* Tablet and above Image */}
            <source media="(min-width: 601px)" srcSet={oms} />
            <img
              loading="lazy"
              decoding="async"
              src={oms}
              alt="kid"
              width="320"
              height="320"
            />
          </picture>

          {/* Flower */}
          <img
            className="cs-flower"
            loading="lazy"
            decoding="async"
            src={g}
            alt="graphic"
            width="153"
            height="148"
            aria-hidden="true"
          />

          {/* Squiggle */}
          <img
            className="cs-squiggle"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/squiggle4.svg"
            alt="graphic"
            width="215"
            height="61"
            aria-hidden="true"
          />

          {/* SVG Mask */}
          <svg
            className="cs-mask"
            width="647"
            height="600"
            viewBox="0 0 647 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="cs-outer-mask"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H647V600H0V0ZM38 110C64.0297 75.766 102.579 52.0824 143 37C144.788 36.3365 146.555 35.5378 148.324 34.7378C150.529 33.7407 152.738 32.7417 155 32C251.273 0.380304 364.071 -8.26436 457 38C514.621 66.6831 553.453 118.152 591.339 168.368C596.562 175.29 601.767 182.188 607 189C657.382 254.558 650.888 352.089 614 422C585.347 476.308 539.036 519.481 487 552C403.358 604.274 320.729 610.296 236 554C116.994 474.921 -74.8032 258.339 38 110Z"
              fill="#FFF8F5"
            />
            <path
              className="cs-mask-border"
              d="M609.578 419.667L614 422L609.578 419.667C645.882 350.863 651.85 255.566 603.035 192.047L603.035 192.046C597.763 185.184 592.537 178.261 587.308 171.335C549.335 121.032 511.26 70.5951 454.772 42.4761L454.772 42.476C363.478 -2.9739 252.173 5.34746 156.56 36.7504L156.558 36.7511C154.801 37.3273 153.023 38.1029 151.033 39.0003C150.82 39.0965 150.603 39.1945 150.384 39.2937C148.637 40.0841 146.708 40.9569 144.748 41.6845C104.889 56.5573 67.259 79.7797 41.9802 113.026L38 110L41.98 113.027C-12.5389 184.72 5.99713 273.442 54.3776 355.432C102.668 437.269 179.806 510.656 238.767 549.836C280.403 577.499 321.25 589.69 361.787 588.715C402.372 587.739 443.075 573.556 484.35 547.76C535.868 515.565 581.448 472.984 609.578 419.667Z"
              stroke="#FFD3C6"
              strokeWidth="10"
            />
          </svg>
        </div>

        <div className="cs-content">
          <span className="cs-topper">You Might Think of</span>
          <h2 className="cs-title whychose">
            Why to Choose
            <span>
              <img src={logo} alt="" />
            </span>
          </h2>
          <p className="cs-text">
            Global-Tech has undertaken several initiatives through its Business
            Excellence Model, with the aim of achieving substantial growth and
            long term perspective.
          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              <picture className="cs-li-picture">
                <img
                  className="cs-li-icon"
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/direction.svg"
                  decoding="async"
                  alt="icon"
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Our Mission</h3>
                <p className="cs-li-text">
                  Our mission is to deliver innovative web and software
                  solutions, and reliable accounting services, driving success
                  and efficiency for clients around all over Nepal.
                </p>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-li-picture">
                <img
                  className="cs-li-icon"
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/target.svg"
                  decoding="async"
                  alt="icon"
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </picture>
              <div className="cs-flex">
                <h3 className="cs-h3">Our Vision</h3>
                <p className="cs-li-text">
                  Our vision is to simplify accounting through innovative
                  solutions, making financial management effortless and
                  accessible for all businesses.
                </p>
              </div>
            </li>
          </ul>
          <NavLink to={"/products"} className={"cs-button-solid"}>View Products</NavLink>
        </div>
      </div>

      {/* Top Zig Zag */}
      <svg
        className="cs-top"
        width="1920"
        height="39"
        viewBox="0 0 1920 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 0H0V15.8216L4.95532 13.3966L18.1455 15.2801L28.6394 22.5944L42.0481 24.423L54.0723 27.0599L66.8979 21.3623L78.7034 23.6147L90.9463 27.8134L102.533 21.5742L114.776 24.5329L126.654 25.2314L138.605 24.7997L148.881 29.1554L160.865 25.1586L172.396 29.1566L185.939 26.2066L200.042 33.9181L213.867 26.6057L225.603 29.9449L236.917 32.2738L249.451 35.8149L260.623 31.3646L273.076 35.6706L284.188 31.6012L297.289 27.2454L309.567 27.4933L321.658 22.1764L333.826 23.4187L345.854 18.2096L358.032 15.6744L370.712 16.3785L382.078 12.2422L393.371 16.7312L406.095 16.2746L419.115 10.8775L431.485 17.1356L442.942 15.4495L455.563 12.9642L469.86 15.0631L483.317 17.0052L496.527 23.0246L508.673 18.1293L522.195 21.4969L535.43 15.8522L547.927 16.3948L560.026 12.9656L572.837 16.9451L585.387 16.3636L598.621 18.5742L611.349 20.4698L623.833 19.1787L634.808 25.7045L648.146 27.3197L659.454 21.6074L674.63 16.9745L684.943 21.2616L697.626 20.6847L710.181 27.6062L723.306 25.8498L736.95 21.5714L749.98 19.3897L761.754 23.0817L772.726 21.5688L785.292 26.5641L796.582 22.7759L809.209 16.8682L822.409 19.8051L835.61 18.1557L846.262 25.1683L858.56 21.0147L871.128 24.3686L883.773 25.0099L896.882 31.191L911.088 28.1681L922.799 26.4471L934.58 22.9328L946.812 20.6818L957.842 23.3323L968.62 20.4467L982.029 17.3061L993.553 13.8992L1005.46 20.9397L1016.76 24.0685L1028.61 20.3871L1040.96 17.6381L1053.66 16.5063L1065.9 15.7517L1079.19 18.2733L1092.13 20.3714L1104.54 16.6528L1117.51 12.2083L1129.97 12.4888L1142.2 9.22411L1153.95 14.6851L1167.27 14.6112L1179.48 10.1526L1192.57 10.3788L1203.5 6.5081L1216.46 7.31856L1230.78 3.27223L1242.94 3.37394L1256.53 0.485578L1268.88 1.44738L1280.81 2.47681L1293.02 3.88198L1305.63 3.89696L1318.51 0.320835L1331.56 2.73054L1343.89 0L1356.83 3.86567L1369.63 6.60841L1382.1 11.1469L1394.54 8.8724L1407.24 13.4173L1419.19 8.43653L1431.57 5.16754L1444.47 2.01397L1456.89 0.717823L1468.76 2.42309L1480.47 5.53051L1492.45 9.64619L1504.16 12.1414L1517.18 10.7264L1529.78 14.1697L1541.78 11.6668L1554.8 13.1878L1567.8 10.8326L1580.1 8.88506L1592.92 6.26432L1605.12 9.6615L1616.66 8.77974L1629.76 4.70235L1641.53 5.37661L1652.56 2.78863L1663.45 5.03873L1675.13 4.62169L1687.55 8.87572L1700.58 7.21222L1713.5 10.4153L1726.19 9.61211L1738.96 6.9475L1751.68 9.2499L1764.63 6.65468L1777.11 3.43788L1788.73 7.33846L1799.83 6.08388L1811.84 3.48256L1824.15 3.77665L1836.14 0.692644L1848.72 4.23709L1860.61 0.526151L1872.31 3.41332L1883.35 5.66472L1893.97 2.57486L1903.97 1.73268L1913.32 4.38797L1920 0Z"
          fill="#FFD3C6"
        />
      </svg>

      {/* Bottom Zig Zag */}
      <svg
        className="cs-bottom"
        width="1920"
        height="39"
        viewBox="0 0 1920 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 39H0V23.1786L4.95532 25.5936L18.1455 23.7101L28.6394 16.3958L42.0481 14.566L54.0723 11.9294L66.8979 17.6269L78.7034 15.3746L90.9463 11.1759L102.533 17.415L114.776 14.4563L126.654 13.7577L138.605 14.1894L148.881 9.83368L160.865 13.8304L172.396 9.8329L185.939 12.7835L200.042 5.07199L213.867 12.3844L225.603 9.04519L236.917 6.71624L249.451 3.20016L260.623 7.66048L273.076 3.3545L284.188 7.4239L297.289 11.7797L309.567 11.5316L321.658 16.8485L333.826 15.6062L345.854 20.8153L358.032 23.3504L370.712 22.6464L382.078 26.7827L393.371 22.2937L406.095 22.7507L419.115 28.1477L431.485 21.8895L442.942 23.5755L455.563 26.0608L469.86 23.0228L483.317 21.0806L496.527 15.0611L508.673 19.9564L522.195 16.5884L535.43 22.2331L547.927 21.6948L560.026 25.7577L572.837 21.7783L585.387 22.4216L598.621 20.2045L611.349 18.3098L623.833 19.6007L634.808 13.0741L648.146 11.4598L659.454 17.1727L674.63 21.6353L684.943 17.3482L697.626 17.9243L710.181 10.0027L723.306 12.7595L736.95 10.6266L749.98 12.2904L761.754 10.6387L772.726 11.9371L785.292 8.1338L796.582 10.7854L809.209 13.5648L822.409 17.3425L835.61 13.8315L846.262 17.0573L858.56 23.6466L871.128 27.1397L883.773 23.2263L896.882 18.6142L911.088 20.0591L922.799 24.2791L934.58 28.8776L946.812 24.8832L957.842 19.2377L968.62 23.0239L982.029 16.0904L993.553 12.4262L1005.46 18.4812L1016.76 20.4463L1028.61 23.3547L1040.96 22.0663L1053.66 16.8202L1065.9 22.4591L1079.19 20.6933L1092.13 22.9696L1104.54 18.9419L1117.51 22.7021L1129.97 23.4091L1142.2 27.3464L1153.95 24.1447L1167.27 20.2061L1179.48 22.1172L1192.57 19.7436L1203.5 21.3735L1216.46 23.6054L1230.78 27.6072L1242.94 25.3363L1256.53 22.6007L1268.88 21.4068L1280.81 16.3431L1293.02 15.8341L1305.63 14.2914L1318.51 11.2602L1331.56 12.1511L1343.89 16.7784L1356.83 20.9646L1369.63 22.4979L1382.1 27.2685L1394.54 27.0511L1407.24 22.0978L1419.19 24.5268L1431.57 20.5965L1444.47 19.2334L1456.89 22.0798L1468.76 24.4101L1480.47 27.6804L1492.45 24.8095L1504.16 19.6782L1517.18 17.6657L1529.78 23.6296L1541.78 22.5963L1554.8 17.5719L1567.8 13.8946L1580.1 11.2644L1592.92 11.4719L1605.12 13.0878L1616.66 14.5944L1629.76 10.3037L1641.53 11.6014L1652.56 13.5429L1663.45 17.9062L1675.13 20.5688L1687.55 21.2563L1700.58 18.9314L1713.5 20.8001L1726.19 16.2684L1738.96 20.7122L1751.68 22.8487L1764.63 26.4675L1777.11 29.4594L1788.73 25.7015L1799.83 23.0883L1811.84 22.8127L1824.15 27.3119L1836.14 26.4406L1848.72 22.5052L1860.61 21.6215L1872.31 27.8555L1883.35 30.4431L1893.97 32.3038L1903.97 28.0378L1913.32 25.8815L1920 39V0Z"
          fill="#E0A8A2"
        />
      </svg>

      {/* Side Pattern */}
      <svg
        className="cs-side"
        width="124"
        height="39"
        viewBox="0 0 124 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 39H124V0H0V39Z" fill="#E3B8B6" />
        <path
          d="M0 39H15.1428V24.2841H0V39ZM15.1428 0H0V14.9846H15.1428V0ZM124 14.9846H15.1428V0H124V14.9846ZM124 24.2841H89.0032V39H124V24.2841Z"
          fill="#D6A4A2"
        />
      </svg>
    </div>
  );
};

export default WhyChooseUS;
