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