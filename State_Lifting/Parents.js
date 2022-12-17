
import Child from '../State_Lifting/Child';

const Parents = () => {
    const parentdata1 = 'I am Parents Data -1'
    const parentdata2 = 'I am Parents Data -2'

    function handleChildData(childData) {
        console.log(childData);
        return (childData);        
    }
    return (
        <div>
            <h1>Parents</h1>   
            <Child  
            parentdata1= {parentdata1} 
            parentdata2= {parentdata2} 
            childdata={handleChildData}
            />
            <h1>In Parents: </h1>   
        </div>
    )
}
export default Parents;