import { useSearchParams } from 'react-router-dom';
import { Color } from '../../assets/theme';
import { TabTitle, TabWrapper } from './styles/tab.styles';
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
    return (
        <TabTitle activeColor={Color.alerzoBlueTint} active={active} color={color} onClick={() => onClick()}>
            {item.label}
        </TabTitle>

    )
}

TabPage.Tabs = function TabList({ tabs, color, currentValue}: TabsProps) {
    const [queryParam, setQueryParams] = useSearchParams();
    return (
        <>
            <TabWrapper>
                {tabs.map((item, index) => {
                    return (
                        <TabPage.Title key={index} item={item} color={color} active={item?.value === currentValue} onClick={() => {
                            setQueryParams({ status: item.value })
                        }} />

                    )
                })}
            </TabWrapper>

        </>
    )
}


