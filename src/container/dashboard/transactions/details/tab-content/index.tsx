import { useLocation } from "react-router-dom";
import DetailsContent from "./transaction-details";

const TabsContentContainer = () => {
    const location = useLocation();
    const thePath = location.pathname;
    const activeTab = thePath.substring(thePath.lastIndexOf('/') + 1)
    console.log(activeTab)
    const renderSwitch = () => {
        switch (activeTab) {
            case 'other':
                return <div>Others</div>
            case 'receipt':
                return <div>Receipt</div>
            case 'notes':
                return <div>Notes</div>
            case 'details':
                return <DetailsContent />
            default:
                return null
        }
    }
    return (
        <>

            {renderSwitch()}
        </>
    )

}

export default TabsContentContainer;