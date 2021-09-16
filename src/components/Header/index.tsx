import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  btn: {
    backgroundColor: "yellow",
    "&:hover": {
      backgroundColor: "forestgreen",
    },
  },

  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const [count, setCount] = useState(0);
  const [changeColor, setColor] = useState(false);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  // incrementCounter = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  const handleClick = () => {
    setColor((current) => {
      return !current;
    });
  };

  // handleClick = () => {
  //   this.setState((current) => {
  //     return { changeColor: !current.changeColor };
  //   });
  // };

  const classes = useStyles();
  return (
    // Панель навигации
    <AppBar position="fixed">
      {/* базовый элемент всех макетов, центрирует элементы по горизонтали */}
      <Container fixed>
        {/* в toolbar кладутся иконки, логотипы, кнопки для адаптивного меню */}
        <Toolbar>
          <MenuIcon />
          <Typography className={classes.title} variant="h6">
            My first app
          </Typography>
          {/* компонент box является оберткой, этакий аналог div */}
          {/* мы прописали ему марджин (весь спесинг тут работает так 1 = 8px */}
          <Box mr={3}>
            <Button
              color="inherit"
              // первый вариант изменения кнопки
              variant={changeColor ? "contained" : "outlined"}
              // второй вариант изменения кнопки
              // classes={{
              //   root: changeColor ? classes.btn : undefined,
              // }}
              className={classes.menuButton}
              onClick={handleClick}
            >
              Log In
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={incrementCounter}
            >
              click {count}
            </Button>
            <Button
              classes={{
                root: classes.btn,
              }}
            >
              test3
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
