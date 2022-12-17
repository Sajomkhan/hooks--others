
const Child = ({parentdata1, parentdata2, childdata}) => { //props distructure

    const data = 'Child to Parents data send'

    childdata(data);
    
    return (
        <div>
            <h1>Child</h1>
            <p>In Child: {parentdata1}</p>
            <p>In Child: {parentdata2}</p>
        </div>
    )
}
export default Child;