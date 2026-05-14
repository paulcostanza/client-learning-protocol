import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useState } from 'react'

export default function Dropdown({ questions, answers }) {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div>
            <div style={{ border: '1px solid #23272a', padding: '10px', borderRadius: '10px' }}>
                {questions.map((el, idx) => (
                    <Accordion
                        key={idx}
                        style={{ color: '#fff', backgroundColor: '#23272a' }}
                        expanded={expanded === `panel${idx}`}
                        onChange={handleChange(`panel${idx}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#fff' }} />}
                            aria-controls={`${idx}-panel-content`}
                            id={`${idx}-panel-header`}
                        >
                            <Typography component="span">
                                <strong>{el}</strong>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            {answers[idx]}
                        </AccordionDetails>
                    </Accordion>
                ))}

            </div>
        </div >
    )
}

// export default function ControlledAccordions() {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };

//     return (
//         <div>
//             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//                 <AccordionSummary>
//                     <Typography>
//                         General settings
//                     </Typography>
//                     <Typography>
//                         I am an accordion
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//                         Aliquam eget maximus est, id dignissim quam.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//                 <AccordionSummary>
//                     <Typography>
//                         Users
//                     </Typography>
//                     <Typography>
//                         You are currently not an owner
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//                         varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//                         laoreet.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel3bh-content"
//                     id="panel3bh-header"
//                 >
//                     <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
//                         Advanced settings
//                     </Typography>
//                     <Typography component="span" sx={{ color: 'text.secondary' }}>
//                         Filtering has been entirely disabled for whole web server
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//                         amet egestas eros, vitae egestas augue. Duis vel est augue.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel4bh-content"
//                     id="panel4bh-header"
//                 >
//                     <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
//                         Personal data
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//                         amet egestas eros, vitae egestas augue. Duis vel est augue.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         </div>
//     );
// }