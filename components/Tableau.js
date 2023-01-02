// import TableauReport from 'tableau-react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

const Tableau = props => (
    <>
        {console.log(props)}
        <TableauEmbed sourceUrl={props.url} width='1000px' height='400px'/>
        {/* <TableauReport
            url = {props.url}
            filters = {props.filters}
            parameters = {props.parameters}
            options = {props.options}
        /> */}
        {/* <div className='tableauPlaceholder' id={props.id} style={{position: 'relative', minHeight: '587px', width: '1020px'}}>
            <noscript>
                <a href='#'><img
                        alt='Dashboard 1'
                        src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;El&#47;ElectionQ1&#47;Dashboard1&#47;1_rss.png'
                        style={'border: none'}/>
                </a>
            </noscript>
            <object className='tableauViz'>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='ElectionQ1&#47;Dashboard1' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image'
                    value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;El&#47;ElectionQ1&#47;Dashboard1&#47;1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
            </object>
        </div> */}
    </>
)

export default Tableau;