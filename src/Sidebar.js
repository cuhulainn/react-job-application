import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "25%",
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Box
          fontSize={32}
          textAlign="center"
          marginBottom={8}
          fontWeight="fontWeightBold"
        >
          <Typography
            variant="h4"
            style={{
              marginBottom: 60,
            }}
          >
            Dummy Heading
          </Typography>
        </Box>
        <Typography variant="p">
          <Box lineHeight="2" textAlign="left" fontSize={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Box>
        </Typography>
      </div>
    </>
  );
}

export default Sidebar;
