import "./Navigation.css"
import NavigationItem from '../NavigationItem/NavigatinItem';

const Navigation = () => {
  return (
    <div className="navigation">
      {["Профиль", "Сообщения", "Новости", "Настройки"].map((el) => <NavigationItem title={el} key={el}/>)}
    </div>
  )
}

export default Navigation