import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card
      className="animacion-card"
      sx={{
        width: 345,
        paddingTop: "5px",
        paddingRight: "5px",
        paddingLeft: "5px",
        backgroundColor: "linen",
        margin: "20px",
      }}
    >
      <CardMedia sx={{ height: 300 }} image={item.img} title={item.category} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: "fuenteCard" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "fuenteCard", fontSize: "15px" }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{ fontFamily: "fuenteCard", fontSize: "25px" }}
        >
          $ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {item.stock > 0 ? (
          <Link to={`/itemDatail/${item.id}`}>
            <Button
              size="small"
              variant="outlined"
              style={{
                color: "Purple",
                borderColor: "Purple",
                fontFamily: "fuenteCard",
              }}
            >
              Ver detalle
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            SIN STOCK
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
