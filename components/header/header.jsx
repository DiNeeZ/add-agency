import Button from "../UI/button/button";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>Header</h1>
        <div className={styles.wrapper}>
          {/* Кнопка по умолчанию */}
          <Button handleClick={() => console.log("Зарегистрируемся!")}>
            Зарегистрироваться
          </Button>

          {/* Кнопка с темой "Teal" */}
          <Button
            theme="teal"
            handleClick={() => console.log("Зарабатываем больше!")}
          >
            Заработать больше
          </Button>

          {/* Маленькая кнопка по умолчанию */}
          <Button
            variant="secondary"
            handleClick={() => console.log("Входим!!!")}
          >
            Войти
          </Button>

          {/* Маленькая кнопка с темой "Teal"  */}
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
