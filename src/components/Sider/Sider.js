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
      <Check className= "sider-menu" size="30" color="white" />
      <div className="sider-menu">
        <BookBookmark size="30" color="white" />
        <div>База знаний</div>
      </div>
      <div className="sider-menu">
        <File size="30" color="white" />
        <div>Заявки</div>
      </div>
      <div className="sider-menu">
        <Users size="30" color="white" />
        <div>Сотрудники</div>
      </div>
      <div className="sider-menu">
        <BuildingHouse size="30" color="white" />
        <div>Клиенты</div>
      </div>
      <div className="sider-menu">
        <Display size="30" color="white" />
        <div>Активы</div>
      </div>
      <div className="sider-menu">
        <Gear size="30" color="white" />
        <div>Настройки</div>
      </div>
    </div>
  );
}