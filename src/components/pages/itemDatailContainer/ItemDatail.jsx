import CounterContainer from "../../common/counter/CounterContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemDatail = ({ productSelected, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              padding: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {productSelected.title}
          </Typography>
          <CardMedia
            component="img"
            height="auto"
            image={productSelected.img}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {productSelected.detalle}
            </Typography>
            <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemDatail;
