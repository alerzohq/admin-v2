import { useLocation } from "react-router-dom";
import { useFetch } from "../../../../../hooks";
import { getStorageItem } from "../../../../../utils/session-storage";
import DetailsContent from "./transaction-details";
import { Transaction } from "./type";

const TabsContentContainer = ({data}:Transaction) => {


    console.log(getStorageItem('user'))
    const search = useLocation().search;
    const queryParam = new URLSearchParams(search).get('status');
    const renderSwitch = () => {
        switch (queryParam) {
            case 'other':
                return <div>Others</div>
            case 'receipt':
                return <div>Receipt</div>
            case 'notes':
                return <div>Notes</div>
            default:
                return  <DetailsContent data={data} />
        }
    }
    return (
        <>

            {renderSwitch()}
        </>
    )

}

export default TabsContentContainer;