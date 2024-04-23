import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'pin.png',
  iconSize: [30, 30], // icon size
});
function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div> 
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
