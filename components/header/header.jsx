import Button from "../UI/button/button";
import LanguageSelector from "../UI/language-switcher/language-switcher";
import Dropdown from "../UI/dropdown/dropdown";
import styles from "./header.module.scss";

const Header = () => {
  const laguageList = ["Eng", "Rus"];
  const contactMethods = [
    "Phone",
    "Telegram",
    "WhatsApp",
    "Skype",
    "E-mail",
    "other",
  ];

  return (
    <header>
      <div className={styles.container}>
        <h1>Header</h1>
        <div className={styles.wrapper}>
          <Button handleClick={() => console.log("Зарегистрируемся!")}>
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

          <LanguageSelector languages={laguageList} />

          <Dropdown options={contactMethods} label={"Contact methods"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
