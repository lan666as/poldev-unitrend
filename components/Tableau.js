import TableauReport from 'tableau-react';

const Tableau = props => (
    <>
        {console.log(props)}
        <TableauReport
            url = {props.url}
            filters = {props.filters}
            parameters = {props.parameters}
            options = {props.options}
        />
    </>
)

export default Tableau;