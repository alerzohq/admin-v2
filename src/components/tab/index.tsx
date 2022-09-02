import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Color } from '../../assets/theme';
import { TabContent, TabTitle, TabWrapper } from './styles/tab.styles';
import { TabsProps, TabsTitleProps, TabsPageProps } from './type.d';
import Stack from '../stack';
const TabPage = ({ children }: TabsPageProps) => {
    return (
        <TabWrapper>
            {children}
        </TabWrapper>
    )
}

export default TabPage;

TabPage.Title = function TabsTitle({ active, item, color, onClick }: TabsTitleProps) {
    // const { transID } = useParams();
    
    return (
        <Link to={item.value}>
            <TabTitle activeColor={Color.alerzoBlueTint} active={active} color={color} onClick={() => onClick()}>
                {item.label}
            </TabTitle>
        </Link>
    )
}

TabPage.Tabs = function TabList({ active, tabs, color, setActive }: TabsProps) {
    return (
        <TabWrapper>
            {tabs.map((item, index) => {
                return (
                    <>
                        <TabPage.Title item={item} color={color} active={active === index} onClick={() => setActive(index)} />
                    </>
                )
            })}
        </TabWrapper>
    )
}

TabPage.Body = function TabBody({ children }: TabsPageProps) {
    return (
        <Stack alignItems={"center"} padding={"5rem 0 0 0"}>
            {children}
        </Stack>
    )
}


TabPage.Switch = function TabSwitch({ tabs, component }: TabsProps) {
    return (
        <Routes>
            {tabs.map((item, index) => {
                return (
                    <Route path={item.value} element={<TabPage.Body children={component} />} />
                )
            })}

        </Routes>

    )
}
