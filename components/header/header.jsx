import Button from "../UI/button/button";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>Header</h1>
        <div className={styles.wrapper}>
          <Button
            variant="primary"
            handleClick={() => console.log("Зарегистрируемся!")}
          >
            Зарегистрироваться
          </Button>

          <Button
            theme="teal"
            handleClick={() => console.log("Зарабатываем больше!")}
          >
            Заработать больше
          </Button>

          <Button
            variant="secondary"
            handleClick={() => console.log("Входим!!!")}
          >
            Войти
          </Button>

          <Button
            variant="secondary"
            theme="teal"
            handleClick={() => console.log("И снова регистрируемся!")}
          >
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
