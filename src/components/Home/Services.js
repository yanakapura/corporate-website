import { Link } from 'react-router-dom';
import './Servicies.scss'

const DUMMY_SERVICIES = [
    {id: 's1',name: 'Архитектурное проектирование'},
    {id: 's2',name: 'Строительное проектирование и конструирование'},
    {id: 's3',name: 'Проектирование инженерных сетей'},
    {id: 's4',name: 'Согласование проектной документации во всех необходимых инстанциях (УГЭ, СЭС)'},
    {id: 's5',name: 'Перепланировки'},
]

const Servicies = () => {

    const servicies = DUMMY_SERVICIES.map(item=><li key={item.id}>
        <Link>{item.name}</Link>
    </li>)

    return <section className='servicies'>
        <h2>Услуги</h2>
        <ul>
            {servicies}
        </ul>
    </section>
};

export default Servicies