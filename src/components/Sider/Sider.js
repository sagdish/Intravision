import React from 'react';
import { Check } from 'styled-icons/fa-solid/Check'
import { BookBookmark } from 'styled-icons/boxicons-regular/BookBookmark'
import { File } from 'styled-icons/boxicons-regular/File';
import { Users } from 'styled-icons/fa-solid/Users';
import { BuildingHouse } from 'styled-icons/boxicons-regular/BuildingHouse';
import { Display } from 'styled-icons/icomoon/Display';
import { Gear } from 'styled-icons/evil/Gear'


import './Sider.css'

export default function Sider() {
  return(
    <div className="sider">
      <Check size="40" color="white" title ="База знаний" />
      <BookBookmark size="40" color="white" />
      <div>База знаний</div>
      <File size="40" color="white" />
      <div>Заявки</div>
      <Users size="40" color="white" />
      <div>Сотрудники</div>
      <BuildingHouse size="40" color="white" />
      <div>Клиенты</div>
      <Display size="40" color="white" />
      <div>Активы</div>
      <Gear size="40" color="white" />
      <div>Настройки</div>
    </div>
  );
}