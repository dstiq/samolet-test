export interface ILibrary {
    address: string
    buildings_disrepair: number
    buildings_management: number
    buildings_repair: number
    computers: number
    copies: number
    copies_electronic: number
    copies_issued: number
    copies_issued_children: number
    digital_catalogs: number
    dropped_copies: number
    electronic_catalogue_volume: number
    employees: number
    employees_staff: number
    formname: string
    fullname: string
    funds: number
    funds_acquisition: number
    funds_budget: number
    funds_entrepreneurial: number
    "funds_main_activity,_thousand_rubles": number
    "funds_staff,_thousand_rubles": number
    funds_used: number
    "individual_subscribers_(information_services),_units": number
    internet: number
    internet_catalogs: number
    internet_catalogue_volume: number
    issued_electronic: number
    kopuk: string
    libraries: number
    libraries_computers: number
    "number_of_personal_computers_in_libraries,_units": number
    order: number
    out_of_instances: number
    period: string
    received_copies: number
    received_electronic: number
    site: number
    staff_higheeducated: number
    staff_vocational: number
    subscribers: number
    territory: string
    users: number
    users_children: number
    visits: number
    visits_sites: number
}


export type ITerritory = {
    territory: string
    items: ILibrary[]
    key: number
}



export const columnsTerritory = [
    {
        title: 'Регион',
        rowKey: '',
        dataIndex: 'territory',
        sorter: (a: ILibrary, b: ILibrary) => a.territory.length - b.territory.length,
    },
    {
        title: 'Источник данных',
        dataIndex: 'fullname',
        sorter: (a: ILibrary, b: ILibrary) => a.fullname.length - b.fullname.length,
    },{
        title: 'Адрес',
        dataIndex: 'address',
    sorter: (a: ILibrary, b: ILibrary) => a.address.length - b.address.length,
    }, {
        title: 'Количество библиотек',
        dataIndex: 'libraries',
        sorter: (a: ILibrary, b: ILibrary) => a.libraries - b.libraries,
    }

];


