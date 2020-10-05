import React, { useContext } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { ContextElement } from '../../App';


const ShowEventDetail = (props) => {
     const [nav, setNav, userLoginInfo, setUserLoginInfo, imgUrl, setImgUrl] = useContext(ContextElement);

    const { title, img, eventDetail } = props.data;
   
    return (
      <Link to={"/volunteerRegister/" + title}>
        <Card className="card">
          <CardMedia>
            <img src={img} alt="EventPicture" style={{ width: "100%" }} />
            <h2>{title}</h2>
            <p>{eventDetail}</p>
          </CardMedia>
        </Card>
      </Link>
    );
};

export default ShowEventDetail;