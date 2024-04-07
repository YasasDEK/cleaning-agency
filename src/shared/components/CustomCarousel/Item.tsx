import { Box } from "@mui/material";

interface Props {
  imageUrl: string;
}

const Item = ({ imageUrl }: Props) => (
  <Box
    sx={{
      opacity: 0.5,
      height: 500,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
    }}
  />
);

export default Item;
