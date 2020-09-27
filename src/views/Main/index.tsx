import React from 'react';
import {Breadcrumb, Button, Input, Layout, Table, Typography} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';

import {columnsTerritory, ILibrary} from "../../constants/library";
import Item from '../Item/index'


const {Content, Footer} = Layout;

type TMain = {
  items: any;
}

enum MainView {
  List, Item
}

/**
 * Главный экран
 * Тут у нас есть отображение по данным источника, плюс расширеенная информация по источнику
 * @param {any} items
 * @returns {any}
 * @constructor
 */
const Main: React.FC<TMain> = ({items}) => {

  //Фильтрация
  const [filterItems, setFilterItems] = React.useState(null);
  //Источник
  const [activeDictionary, setActiveDictionary] = React.useState<ILibrary>(null);
  //Для удобного просмотра сущностей
  const [view, setView] = React.useState<MainView>(MainView.List);


  const TableEventListeners = React.useCallback((record) => ({
    onClick: () => {
      setView(MainView.Item);
      setActiveDictionary(record);
    }
  }), [items]);

  //Функуция поиска - ищем по всем столбцам
  const onSearch = React.useCallback(value => {
    const base = [...items];
    const filterTable = base.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
    setFilterItems(filterTable);
  }, [items]);
  //Кнопка назад - по дефолту идем на главный экран

  const onBack = React.useCallback(() => setView(MainView.List), []);

  return (
    <Layout className="main">
      <Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{margin: '16px'}}>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Статистика по библиотекам</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{padding: '24px 0'}}>
          <Content className="site-layout-background" style={{padding: '0 24px', minHeight: 280}}>
            {
              view === MainView.List &&
              <>
                <Typography.Title style={{padding: 20, textAlign: 'center'}}> Список регионов и количество
                  библиотек</Typography.Title>
                <Input.Search
                  style={{margin: "0 0 10px 0"}}
                  placeholder="Искать везде..."
                  enterButton
                  onSearch={onSearch}
                />
                <Table rowKey={(record) => `${record.order}`} onRow={TableEventListeners} columns={columnsTerritory}
                       dataSource={filterItems ? filterItems : items}/>
              </>
            }
            {
              view === MainView.Item &&
              <Item record={activeDictionary}/>

            }
            <Button style={{margin: 20}} onClick={onBack}>Назад</Button>
          </Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center'}}>Ant Design ©</Footer>
    </Layout>
  );
};
export default Main;
