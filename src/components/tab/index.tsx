import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Color } from '../../assets/theme';
import { TabContent, TabTitle, TabWrapper } from './styles/tab.styles';
import { TabsProps, TabsTitleProps, TabsPageProps } from './type.d';

const TabPage = ({ children }: TabsPageProps) => {
    return (
        <TabWrapper>
            {children}
        </TabWrapper>
    )
}

export default TabPage;

TabPage.Title = function TabsTitle({ active, item, color, onClick }: TabsTitleProps) {
    const { transID } = useParams();
    console.log(`${transID }/${item.value}`)
    return (
        <Link to={item.value}>
            <TabTitle activeColor={Color.alerzoBlueTint} active={active} color={color} onClick={() => onClick()}>
                {item.label}
            </TabTitle>
        </Link>
    )
}

TabPage.Tabs = function TabList({ active, tabs, color, setActive }: TabsProps ) {
    return (
        <TabWrapper>
            {tabs.map((item, index) => {
                return (
                    <>
                        <TabPage.Title  item={item} color={color} active={active === index} onClick={() => setActive(index)} />
                    </>
                )
            })}
        </TabWrapper>
    )
}

TabPage.Body = function TabBody({ children }: TabsPageProps) {
    return (
        <TabContent>
            {children}
        </TabContent>
    )
}


TabPage.Switch = function TabSwitch({ tabs}: TabsProps){
    return (
        <Routes>
            {tabs.map((item, index) => {
                return (
                    <Route path={item.value} element={<TabPage.Body children={<div>{item.value}</div>} />} />
                )
            })}

        </Routes>

    )
}
