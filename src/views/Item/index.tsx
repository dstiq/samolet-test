import React from 'react';
import {Form, Typography} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {ILibrary} from "../../constants/library";


type TItem = {
  record: ILibrary
}

/**
 * Вьюха просмотра сущности источника
 * @param {ILibrary} record
 * @returns {any}
 * @constructor
 */
const Item = ({record}) => {

  return (
    <Form
      labelCol={{span: 4}}
      wrapperCol={{span: 14}}
      layout="horizontal"
    >
      <Typography.Title style={{padding: 20, textAlign: 'center'}}> Расширенная
        информация: {record?.fullname} </Typography.Title>

      <Form.Item label="Регион">
        <label> {record.territory}</label>
      </Form.Item>
      <Form.Item label="Адрес">
        <label> {record.address} </label>
      </Form.Item>
      <Form.Item label="Кол-во библиотек">
        <label> {record.libraries}</label>
      </Form.Item>
      <Form.Item label="Количество пользователей">
        <label> {record.users}</label>
      </Form.Item>
      <Form.Item label="Посещения">
        <label> {record.visits}</label>
      </Form.Item>
      <Form.Item label="Персональные компьютеры">
        <label> {record[`number_of_personal_computers_in_libraries,_units`]} </label>
      </Form.Item>
    </Form>
  );
};
export default Item;
